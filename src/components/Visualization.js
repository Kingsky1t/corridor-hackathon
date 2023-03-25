import React, { useState } from 'react';
import axios from "axios"
import "../assets/css/Visualization.css"

export const Visualization = () => {
  const [file, setFile] = useState(null);

  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
  };

  const [image, setImage] = useState(null);

  const handleFileUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    axios.post('http://127.0.0.1:5000/upload', formData)
      .then((response) => {
        console.log(response.data);
        setImage(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="upload-container">
      <form onSubmit={handleFileUpload}>
        <input type="file" name="file" onChange={handleFileInputChange} />
        <button className="upload-btn" type="submit">Upload</button>

        {image && <img src={`data:image/png;base64,${image}`} alt="generated image" />}
      </form>
    </div>
  );
}

