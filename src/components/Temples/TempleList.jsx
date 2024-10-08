import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const TempleList = ({ apiUrl }) => {
  const [temples, setTemples] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTemples = async () => {
      try {
        const response = await fetch(`${apiUrl}/temples`);
        if (response.ok) {
          const responseData = await response.json();
          console.log("Response Data: ", responseData);
          setTemples(responseData.data);
        } else {
          console.error("Failed to fetch temples");
        }
      } catch (error) {
        console.error("Error fetching temples:", error);
      }
    };

    fetchTemples();
  }, [apiUrl]);

  const handleShow = (id) => {
    navigate(`/temples/${id}`);
  };

  return (
    <div className="container mt-5">
      <h2>Temple List</h2>
      <Link to="/temples/add-temple" className="btn btn-primary mb-3">Add Temple</Link>
      <div className="row">
        {temples.map((temple) => (
          <div className="col-md-4" key={temple.id} id={`temple-${temple.id}`}>
            <div className="card mb-4">
              <img
                src={temple.images && temple.images.length > 0 ? temple.images[0] : 'https://via.placeholder.com/150'}
                className="card-img-top"
                alt={temple.name}
                style={{ height: '30vh', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{temple.name}</h5>
                <p className="card-text">Location: {temple.location}</p>
                <p className="card-text">Description: {temple.description}</p>
                <p className="card-text">Latitude: {temple.latitude}</p>
                <p className="card-text">Longitude: {temple.longitude}</p>
                <p className="card-text">Founding Date: {temple.founding_date}</p>
                <p className="card-text">Deity: {temple.deity}</p>
                <button onClick={() => handleShow(temple.id)} className="btn btn-info">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TempleList;
