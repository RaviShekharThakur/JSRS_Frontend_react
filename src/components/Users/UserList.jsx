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
      <h2>User List</h2>
      <Link to="/add-user" className="btn btn-primary mb-3">Add User</Link>
      <div className="row">
        {users.map((user) => (
          <div className="col-md-4" key={user.id}>
            <div className="card mb-4">
              <img
                src={user.image_url || 'https://via.placeholder.com/150'}
                className="card-img-top"
                alt={user.name}
              />
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">Email: {user.email}</p>
                <p className="card-text">Phone: {user.phone}</p>
                <button onClick={() => handleShow(user.id)} className="btn btn-info">
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
