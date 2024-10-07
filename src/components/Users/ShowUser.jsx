import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ShowUser = ({ apiUrl }) => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${apiUrl}/users/${id}`);
        if (response.ok) {
          const responseData = await response.json();
          console.log("User Data: ", responseData);
          setUser(responseData.data);
        } else {
          console.error("Failed to fetch user");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [apiUrl, id]);

  if (!user) return <div>Loading...</div>;
  const handleList = () => {
    navigate(`/`);
  };
  return (
    <div className="container mt-5">
      <h2>User Details</h2>
      <div className="card mb-4">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text">Email: {user.email}</p>
              <p className="card-text">Phone: {user.phone}</p>
              <p className="card-text">Age: {user.age}</p>
              <p className="card-text">Address: {user.address}</p>
              <p className="card-text">Area: {user.area}</p>
              <button onClick={() => handleList()} className="btn btn-info">
                Back to User List
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src={user.image_url || 'https://via.placeholder.com/150'}
              className="img-fluid rounded-start"
              alt={user.name}
              style={{ width: '30vw', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowUser;
