import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import HomePage from './components/Common/HomePage';
import Navbar from './components/Common/Navbar';   
import UserList from './components/Users/UserList'; 
import UserForm from './components/Users/UserForm'; 
import ShowUser from './components/Users/ShowUser';   
import TempleList from './components/Temples/TempleList'; 
import TempleForm from './components/Temples/TempleForm'; 
import ShowTemple from './components/Temples/ShowTemple';

// API Config
import { API_BASE_URL } from './apiConfig';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* User Routes */}
          <Route path="/users" element={<UserList apiUrl={API_BASE_URL} />} />
          <Route path="/add-user" element={<UserForm apiUrl={API_BASE_URL} />} />
          <Route path="/users/:id" element={<ShowUser apiUrl={API_BASE_URL} />} />
          <Route path="/users/edit/:id" element={<UserForm apiUrl={API_BASE_URL} />} />
          
          {/* Temple Routes */}
          <Route path="/temples" element={<TempleList apiUrl={API_BASE_URL} />} />
          <Route path="/temples/add-temple" element={<TempleForm apiUrl={API_BASE_URL} />} />
          <Route path="/temples/:id" element={<ShowTemple apiUrl={API_BASE_URL} />} />
          <Route path="/temples/edit/:id" element={<TempleForm apiUrl={API_BASE_URL} />} />

          {/* 404 Not Found Route */}
          <Route path="*" element={<h2 className="text-center mt-5">404 Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
