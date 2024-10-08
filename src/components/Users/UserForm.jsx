import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UserForm = ({ apiUrl, existingUser = {} }) => {
  const [name, setName] = useState(existingUser.name || '');
  const [email, setEmail] = useState(existingUser.email || '');
  const [phone, setPhone] = useState(existingUser.phone || '');
  const [age, setAge] = useState(existingUser.age || '');
  const [address, setAddress] = useState(existingUser.address || '');
  const [area, setArea] = useState(existingUser.area || '');
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        try {
          const response = await fetch(`${apiUrl}/users/${id}`);
          if (response.ok) {
            const data = await response.json();
            const userData = data.data;
            setName(userData.name);
            setEmail(userData.email);
            setPhone(userData.phone);
            setAge(userData.age);
            setAddress(userData.address);
            setArea(userData.area);
            setImage(userData.image_url);
          } else {
            console.error("Failed to fetch user data for editing.");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
      fetchUser();
    }
  }, [id, apiUrl]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user[name]', name);
    formData.append('user[email]', email);
    formData.append('user[phone]', phone);
    formData.append('user[age]', age);
    formData.append('user[address]', address);
    formData.append('user[area]', area);
    if (image) {
      formData.append('user[image]', image);
    }

    try {
      const response = await fetch(`${apiUrl}/users${id ? `/${id}` : ''}`, {
        method: id ? 'PUT' : 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(id ? 'Failed to update user' : 'Failed to create user');
      }
      
      setName('');
      setEmail('');
      setPhone('');
      setAge('');
      setAddress('');
      setArea('');
      setImage(null);
      navigate(id ? `/users/${id}` : '/');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card bg-dark text-white shadow p-4" style={{ borderRadius: '10px' }}>
        <h2 className="mb-4">{id ? 'Edit User' : 'Add User'}</h2>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input type="tel" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input type="number" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Area</label>
            <input type="text" className="form-control" value={area} onChange={(e) => setArea(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Upload Image</label>
            <input type="file" className="form-control" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <button type="submit" className="btn btn-warning text-dark" style={{ backgroundColor: '#e67e22', border: 'none' }}>
            {id ? 'Update User' : 'Add User'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
