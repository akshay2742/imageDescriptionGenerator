import tensorflow as tf

# Initialize the model (replace with your model path)
model_resnet50 = tf.keras.applications.resnet50.ResNet50()

def prepare_image(imagePath):
    # Preprocess the image for the model
    tf_image = tf.io.read_file(imagePath)
    decoded_image = tf.image.decode_image(tf_image)
    image_resized = tf.image.resize(decoded_image, (224, 224))
    preprocess_input = tf.keras.applications.vgg16.preprocess_input
    image_batch = tf.expand_dims(image_resized, axis=0)
    image_batch = preprocess_input(image_batch)

    return image_batch