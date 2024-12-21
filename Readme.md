# Image Description Generator

## Overview

The Image Description Generator is a web application that allows users to upload images and receive a text description of the image content. It utilizes a pre-trained image classification model from TensorFlow to process the uploaded images and generate descriptive labels.

## Project Structure

```
image_descripter/
│
├── backend/
│   ├── app.py                   # Flask application for handling image uploads and predictions
│   ├── model.py                 # Model configuration and image preprocessing functions
│   └── requirements.txt          # Required Python packages
│
└── frontend/
    ├── public/
    │   └── index.html           # Main HTML file for the React application
    ├── src/
    │   ├── App.js                # Main React component
    │   ├── components/
    │   │   ├── ImageUpload.js    # Component for image upload functionality
    │   │   └── ImageUpload.css    # Styles for the image upload component
    │   ├── index.js              # Entry point for the React application
    │   └── App.css               # Styles for the main application
```

## Setup Instructions

### Prerequisites

- Python 3.6 or higher
- Node.js and npm (for the frontend)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/image_descripter.git
   cd image_descripter
   ```

2. **Set up the backend**:

   - Navigate to the `backend` directory:
     ```bash
     cd backend
     ```
   - Install required Python packages:
     ```bash
     pip install -r requirements.txt
     ```

3. **Set up the frontend**:
   - Navigate to the `frontend` directory:
     ```bash
     cd ../frontend
     ```
   - Install required Node.js packages:
     ```bash
     npm install
     ```

## Running the Application

### Backend

1. Start the Flask server:
   ```bash
   python app.py
   ```
   The server will run on `http://127.0.0.1:5000`.

### Frontend

1. Start the React application:
   ```bash
   npm start
   ```
   The application will run on `http://localhost:3000`.

## Usage

1. Open your web browser and navigate to `http://localhost:3000`.
2. Use the upload area to select an image file (supports JPG, PNG, GIF).
3. Click the "Generate Description" button to upload the image.
4. The application will display the generated text description of the image.

## Technologies Used

- **Backend**: Flask, TensorFlow, NumPy, Pillow
- **Frontend**: React, CSS

## Conclusion

This project demonstrates the ability to handle image uploads, process them using a machine learning model, and provide descriptive outputs in a user-friendly web interface. The application can be further enhanced by exploring additional features such as user authentication, image storage, and more advanced image processing techniques.
