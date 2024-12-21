import React, { useState } from "react";
import "./ImageUpload.css";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
      setDescription("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedImage) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("file", selectedImage);

    try {
      // Replace with your actual API endpoint
      const response = await fetch("http://127.0.0.1:5000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setDescription(data.description);
    } catch (error) {
      console.error("Error:", error);
      setDescription("Error generating description. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-container">
      <form onSubmit={handleSubmit}>
        <div className="upload-area">
          <input
            type="file"
            id="image-input"
            accept="image/*"
            onChange={handleImageChange}
            className="file-input"
          />
          <label htmlFor="image-input" className="upload-label">
            {imagePreview ? (
              <img src={imagePreview} alt="Preview" className="image-preview" />
            ) : (
              <>
                <div className="upload-icon">📁</div>
                <p>Click to upload or drag and drop</p>
                <p className="upload-hint">Supports: JPG, PNG, GIF</p>
              </>
            )}
          </label>
        </div>

        {selectedImage && (
          <button type="submit" className="generate-btn" disabled={loading}>
            {loading ? "Generating..." : "Generate Description"}
          </button>
        )}
      </form>

      {description && (
        <div className="description-container">
          <h3>Image Description:</h3>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
