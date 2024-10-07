import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const UserList = ({ apiUrl }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(`${apiUrl}/users`);
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      }
    };

    fetchUsers();
  }, [apiUrl]);

  return (
    <div className="container mt-5">
      <h2>User List</h2>
      <Link to="/add-user" className="btn btn-primary mb-3">Add User</Link> 
      <div className="row">
        {users.map((user) => (
          <div className="col-md-4" key={user.id}>
            <div className="card mb-4">
              <img
                src={user.imageUrl || 'https://via.placeholder.com/150'}
                className="card-img-top"
                alt={user.name}
              />
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">Email: {user.email}</p>
                <p className="card-text">Phone: {user.phone}</p>
                <Link to={`/users/${user.id}`} className="btn btn-info">View Details</Link>
                {/* You can add more action buttons here, like Edit or Delete */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
