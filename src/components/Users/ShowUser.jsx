import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ShowUser = ({ apiUrl }) => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${apiUrl}/users/${id}`);
        if (response.ok) {
          const responseData = await response.json();
          setUser(responseData.data);
        } else {
          setErrorMessage('Failed to fetch user details.');
        }
      } catch (error) {
        setErrorMessage('Error fetching user: ' + error.message);
      }
    };

    fetchUser();
  }, [apiUrl, id]);

  const handleList = () => {
    navigate(`/users`);
  };

  const deleteUser = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this user?");
    if (!confirmed) return;

    try {
      const response = await fetch(`${apiUrl}/users/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete user');
      } else {
        navigate('/users');
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleEdit = () => {
    navigate(`/users/edit/${id}`);
  };

  if (!user) return <div className="text-white">Loading...</div>;

  return (
    <div className="container mt-5">
      <h2 className="text-white mb-4">User Details</h2>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <div className="card bg-dark text-white shadow-lg">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={user.image_url || 'https://via.placeholder.com/300x300'}
              className="img-fluid rounded-start"
              alt={user.name}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{user.name}</h3>
              <p className="card-text">Email: {user.email}</p>
              <p className="card-text">Phone: {user.phone}</p>
              <p className="card-text">Age: {user.age}</p>
              <p className="card-text">Address: {user.address}</p>
              <p className="card-text">Area: {user.area}</p>
              <div className="mt-3">
                <button onClick={handleList} className="btn btn-info me-2">
                  Back to User List
                </button>
                <button onClick={handleEdit} className="btn btn-warning me-2" style={{ backgroundColor: '#e67e22', border: 'none' }}>
                  Edit User
                </button>
                <button onClick={deleteUser} className="btn btn-danger">
                  Delete User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowUser;
