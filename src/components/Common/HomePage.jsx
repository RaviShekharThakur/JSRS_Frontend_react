import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Header */}
      <header className="text-white text-center py-3" style={{ backgroundColor: '#e67e22' }}>
        <h1>Welcome to Jai Shree Ram Sena</h1>
        <p>Explore spirituality, culture, and community</p>
      </header>

      {/* Hero Section */}
      <section className="bg-light text-center py-5">
        <div className="container">
          <h2 className="mb-4">Join Us for Spiritual Events and Devote yourself to the service of Dharma</h2>
          <p>We work on various spiritual events throughout the year.</p>
          <a href="/events" className="btn" style={{ backgroundColor: '#e67e22', color: '#fff' }}>View Events</a>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container py-5">
        <h2 className="text-center mb-3">Gallery</h2>
        <div className="row">
          <div className="col-md-4">
            <img 
              src="/images/champeshwar.jpg" 
              className="img-fluid mb-3" 
              alt="champeshwar Temple exterior view"
              style={{height: '30vh'}}
            />
          </div>
          <div className="col-md-4">
            <img 
              src="/images/krishnapura.avif"
              className="img-fluid mb-3" 
              alt="Interior view of the temple"
              style={{height: '30vh'}}
            />
          </div>
          <div className="col-md-4">
            <img 
              src="/images/indreshwar.jpg"
              className="img-fluid mb-3" 
              alt="Devotees participating in a religious ceremony"
              style={{height: '30vh'}}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-light text-center py-5">
        <div className="container">
          <h2 className="mb-4">About Us</h2>
          <p>
            Our organisation is dedicated to reform the temples, waking up and uniting the Sanatan Dharma
          </p>
          <a href="/about" className="btn btn-secondary" style={{ backgroundColor: '#e67e22', color: '#fff' }}>Learn More</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white text-center py-3" style={{ backgroundColor: '#e67e22' }}>
        <p>&copy; 2024 Our Hindu Temple. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
