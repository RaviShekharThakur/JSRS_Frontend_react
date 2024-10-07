import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/Users/UserList'; 
import UserForm from './components/Users/UserForm'; 
import Navbar from './components/Common/Navbar';   
import ShowUser from './components/Users/ShowUser';   
import { API_BASE_URL } from './apiConfig';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<UserList apiUrl={API_BASE_URL} />} />
          <Route path="/add-user" element={<UserForm apiUrl={API_BASE_URL} />} />
          <Route path="/users/:id" element={<ShowUser apiUrl={API_BASE_URL} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
