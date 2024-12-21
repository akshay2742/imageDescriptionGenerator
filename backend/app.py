from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import os
from flask_cors import CORS
from model import prepare_image, model_resnet50
import tensorflow as tf

app = Flask(__name__)
CORS(app)
app.config['UPLOAD_FOLDER'] = 'uploads/'

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    print(f"Received file: {file.filename}")
    filename = secure_filename(file.filename)
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    print(file_path)
    file.save(file_path)
    processed_image = prepare_image(file_path)

    # Make prediction
    preds = model_resnet50.predict(processed_image)
    decoded_preds = tf.keras.applications.imagenet_utils.decode_predictions(
        preds=preds,
        top=5
    )
    label = decoded_preds[0][0][1]
    score = decoded_preds[0][0][2]*100
    description = label + ' ' + str('{:.2f}%'.format(score) )

    return jsonify({'description': description})

if __name__ == '__main__':
    if not os.path.exists(app.config['UPLOAD_FOLDER']):
        os.makedirs(app.config['UPLOAD_FOLDER'])
    app.run(debug=True)