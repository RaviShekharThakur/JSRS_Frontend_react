import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserList = ({ apiUrl }) => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${apiUrl}/users`);
        if (response.ok) {
          const responseData = await response.json();
          console.log("Response Data: ", responseData);
          setUsers(responseData.data);
        } else {
          console.error("Failed to fetch users");
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [apiUrl]);

  const handleShow = (id) => {
    navigate(`/users/${id}`);
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="text-white">Raamdoots</h2>
        <Link to="/add-user" className="btn btn-warning text-dark" style={{ backgroundColor: '#e67e22', border: 'none' }}>
          Add User
        </Link>
      </div>
      <div className="row">
        {users.map((user) => (
          <div className="col-md-4" key={user.id}>
            <div className="card bg-dark text-white mb-4 shadow" style={{ borderRadius: '10px' }}>
              <img
                src={user.image_url || 'https://via.placeholder.com/150'}
                className="card-img-top"
                alt={user.name}
                style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px', height: '30vh', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">Email: {user.email}</p>
                <p className="card-text">Phone: {user.phone}</p>
                <button
                  onClick={() => handleShow(user.id)}
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

export default UserList;
