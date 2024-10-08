  import React from 'react';

const HomePage = () => {
  const sectionStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: '10px',
    padding: '2rem',
    marginBottom: '2rem',
  };

  const btnStyle = {
    backgroundColor: '#e67e22',
    border: 'none',
    padding: '0.75rem 1.5rem',
  };

  return (
    <div style={{ minHeight: '100vh', padding: '4rem 1rem', color: '#ffffff' }}>
      {/* Header */}
      <header className="text-center py-4" style={sectionStyle}>
        <h1 className="display-4">Welcome to Jai Shree Ram Sena</h1>
        <p className="lead">Explore spirituality, culture, and community</p>
      </header>

      {/* Hero Section */}
      <section className="text-center" style={sectionStyle}>
        <div>
          <h2 className="mb-4">Join Us for Spiritual Events and Devote Yourself to the Service of Dharma</h2>
          <p>We offer various spiritual events throughout the year.</p>
          <a href="/events" className="btn text-white" style={btnStyle}>View Events</a>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="container text-center" style={sectionStyle}>
        <h2 className="mb-4">Gallery</h2>
        <div id="galleryCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img 
                src="/images/champeshwar.jpg" 
                className="d-block w-100 rounded" 
                alt="Champeshwar Temple exterior view"
                style={{ height: '30vh', objectFit: 'cover' }}
              />
            </div>
            <div className="carousel-item">
              <img 
                src="/images/krishnapura.avif"
                className="d-block w-100 rounded" 
                alt="Interior view of the temple"
                style={{ height: '30vh', objectFit: 'cover' }}
              />
            </div>
            <div className="carousel-item">
              <img 
                src="/images/indreshwar.jpg"
                className="d-block w-100 rounded" 
                alt="Devotees participating in a religious ceremony"
                style={{ height: '30vh', objectFit: 'cover' }}
              />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#galleryCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#galleryCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="text-center" style={sectionStyle}>
        <div>
          <h2 className="mb-4">About Us</h2>
          <p>
            Our temple is dedicated to fostering spiritual growth, cultural education, and community service. 
            We invite you to join us in our mission to promote Hindu values and traditions.
          </p>
          <a href="/about" className="btn text-white" style={btnStyle}>Learn More</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-3" style={{ color: '#ffffff', opacity: 0.8 }}>
        <p>&copy; 2024 Our Sanatan Website. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
