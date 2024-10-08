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
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-white">Temples</h2>
        <Link to="/temples/add-temple" className="btn btn-warning text-dark" style={{ backgroundColor: '#e67e22', border: 'none' }}>
          Add Temple
        </Link>
      </div>
      <div className="row">
        {temples.map((temple) => (
          <div className="col-md-4 mb-4" key={temple.id}>
            <div className="card bg-dark text-white mb-4 shadow" style={{ borderRadius: '10px' }}>
              <img
                src={temple.images && temple.images.length > 0 ? temple.images[0] : 'https://via.placeholder.com/150'}
                className="card-img-top"
                alt={temple.name}
                style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px', height: '30vh', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{temple.name}</h5>
                <p className="card-text">Location: {temple.location}</p>
                <p className="card-text">Description: {temple.description}</p>
                <p className="card-text">Deity: {temple.deity}</p>
                <button
                  onClick={() => handleShow(temple.id)}
                  className="btn btn-outline-light rounded-pill"
                  style={{ borderColor: '#e67e22', color: '#e67e22' }}
                >
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
