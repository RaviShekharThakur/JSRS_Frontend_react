import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const ShowTemple = ({ apiUrl }) => {
  const { id } = useParams();
  const [temple, setTemple] = useState(null);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchTemple = async () => {
      try {
        const response = await fetch(`${apiUrl}/temples/${id}`);
        if (response.ok) {
          const responseData = await response.json();
          setTemple(responseData.data);
        } else {
          setErrorMessage("Failed to fetch temple");
        }
      } catch (error) {
        setErrorMessage("Error fetching temple: " + error.message);
      }
    };

    fetchTemple();
  }, [apiUrl, id]);

  const handleList = () => {
    navigate('/temples');
  };

  const deleteTemple = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this temple?");
    if (!confirmed) return;

    try {
      const response = await fetch(`${apiUrl}/temples/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete temple');
      }
      navigate('/temples');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleEdit = () => {
    navigate(`/temples/edit/${id}`);
  };

  if (!temple) return <div>Loading...</div>;

  return (
    <div className="container mt-5">
      <h2>Temple Details</h2>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <div className="card mb-4">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{temple.name}</h5>
              <p className="card-text">Location: {temple.location}</p>
              <p className="card-text">Description: {temple.description}</p>
              <p className="card-text">Latitude: {temple.latitude}</p>
              <p className="card-text">Longitude: {temple.longitude}</p>
              <p className="card-text">Founding Date: {temple.founding_date}</p>
              <p className="card-text">Deity: {temple.deity}</p>
              <button onClick={handleList} className="btn btn-info me-2">
                Back to Temple List
              </button>
              <button onClick={handleEdit} className="btn btn-primary me-2">
                Edit Temple
              </button>
              <button onClick={deleteTemple} className="btn btn-danger">
                Delete Temple
              </button>
            </div>
          </div>
          <div className="col-md-4">
            {temple.images.length > 0 ? (
              <div id="templeCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {temple.images.map((imageUrl, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                      <img
                        src={imageUrl}
                        className="d-block w-100"
                        alt={`${temple.name} image ${index + 1}`}
                        style={{ height: '50vh', objectFit: 'cover' }}
                      />
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#templeCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#templeCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            ) : (
              <img
                src="https://via.placeholder.com/150"
                className="img-fluid rounded-start"
                alt={temple.name}
                style={{ width: '100%', height: 'auto' }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowTemple;
