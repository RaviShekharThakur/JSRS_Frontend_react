import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TempleForm = ({ apiUrl, existingTemple = {} }) => {
  const [name, setName] = useState(existingTemple.name || '');
  const [location, setLocation] = useState(existingTemple.location || '');
  const [description, setDescription] = useState(existingTemple.description || '');
  const [latitude, setLatitude] = useState(existingTemple.latitude || '');
  const [longitude, setLongitude] = useState(existingTemple.longitude || '');
  const [foundingDate, setFoundingDate] = useState(existingTemple.founding_date || '');
  const [deity, setDeity] = useState(existingTemple.deity || '');
  const [images, setImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchTemple = async () => {
        try {
          const response = await fetch(`${apiUrl}/temples/${id}`);
          if (response.ok) {
            const data = await response.json();
            const templeData = data.data;
            setName(templeData.name);
            setLocation(templeData.location);
            setDescription(templeData.description);
            setLatitude(templeData.latitude);
            setLongitude(templeData.longitude);
            setFoundingDate(templeData.founding_date);
            setDeity(templeData.deity);
          } else {
            console.error("Failed to fetch temple data.");
          }
        } catch (error) {
          console.error("Error fetching temple data:", error);
        }
      };
      fetchTemple();
    }
  }, [id, apiUrl]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('temple[name]', name);
    formData.append('temple[location]', location);
    formData.append('temple[description]', description);
    formData.append('temple[latitude]', latitude);
    formData.append('temple[longitude]', longitude);
    formData.append('temple[founding_date]', foundingDate);
    formData.append('temple[deity]', deity);

    Array.from(images).forEach((image, index) => {
      formData.append(`temple[images][${index}]`, image);
    });

    try {
      const response = await fetch(`${apiUrl}/temples${id ? `/${id}` : ''}`, {
        method: id ? 'PUT' : 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Failed to ${id ? 'update' : 'create'} temple`);
      }

      navigate('/temples');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="container">
      <h2 className="mt-5">{id ? 'Edit' : 'Add'} Temple</h2>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Latitude</label>
          <input
            type="number"
            step="any"
            className="form-control"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Longitude</label>
          <input
            type="number"
            step="any"
            className="form-control"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Founding Date</label>
          <input
            type="date"
            className="form-control"
            value={foundingDate}
            onChange={(e) => setFoundingDate(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Deity</label>
          <input
            type="text"
            className="form-control"
            value={deity}
            onChange={(e) => setDeity(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Upload Images</label>
          <input
            type="file"
            className="form-control"
            multiple
            onChange={(e) => setImages(e.target.files)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {id ? 'Update' : 'Add'} Temple
        </button>
      </form>
    </div>
  );
};

export default TempleForm;
