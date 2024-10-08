import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Header */}
      <header 
        className="text-white text-center py-3" 
        style={{ background: 'linear-gradient(45deg, #e67e22, #d35400)' }}
      >
        <h1>Welcome to Jai Shree Ram Sena</h1>
        <p>Explore spirituality, culture, and community</p>
      </header>

      {/* Hero Section */}
      <section className="bg-light text-center py-5">
        <div className="container">
          <h2 className="mb-4">Join Us for Spiritual Events and Devote yourself to the service of Dharma</h2>
          <p>We offer various spiritual events throughout the year.</p>
          <a href="/events" className="btn text-white" style={{ backgroundColor: '#e67e22' }}>View Events</a>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="container py-5">
        <h2 className="text-center mb-3">Gallery</h2>
        <div id="galleryCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img 
                src="/images/champeshwar.jpg" 
                className="d-block w-100" 
                alt="Champeshwar Temple exterior view"
                style={{height: '30vh'}}
              />
            </div>
            <div className="carousel-item">
              <img 
                src="/images/krishnapura.avif"
                className="d-block w-100" 
                alt="Interior view of the temple"
                style={{height: '30vh'}}
              />
            </div>
            <div className="carousel-item">
              <img 
                src="/images/indreshwar.jpg"
                className="d-block w-100" 
                alt="Devotees participating in a religious ceremony"
                style={{height: '30vh'}}
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
      <section className="bg-light text-center py-5">
        <div className="container">
          <h2 className="mb-4">About Us</h2>
          <p>
            Our temple is dedicated to fostering spiritual growth, cultural education, and community service. 
            We invite you to join us in our mission to promote Hindu values and traditions.
          </p>
          <a href="/about" className="btn text-white" style={{ backgroundColor: '#e67e22' }}>Learn More</a>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="text-white text-center py-3" 
        style={{ background: 'linear-gradient(45deg, #e67e22, #d35400)' }}
      >
        <p>&copy; 2024 Our Hindu Temple. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
