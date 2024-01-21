// ShowData.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ShowData() {
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/uploads');
        setUploads(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Uploaded Data</h1>
      <ul>
        {uploads.map((upload) => (
          <li key={upload._id}>
            <h3>Name: {upload.name}</h3>
            <p>Description: {upload.description}</p>
            <p>Subject: {upload.subject}</p>
            <img src={`http://localhost:5000/${upload.fileUrl}`} alt="Uploaded" style={{ maxWidth: '300px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowData;
