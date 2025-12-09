import React from 'react'
import Slide from './Slide';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-light text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to MyApp</h1>
          <p className="lead mt-3">
            A simple and modern React + Bootstrap template for your project.
          </p>
          <button className="btn btn-light btn-lg mt-3">
            Get Started
          </button>
        </div>
      </section>
      {/* Features Section */}
      <section className="container py-5">
        <h2 className="text-center mb-4">Our Features</h2>
        <div className="row">

          <div className="col-md-4 text-center mb-4">
            <div className="card p-3 shadow-sm">
              <h4 className="fw-bold">Fast</h4>
              <p className="mt-2">
                Lightning-fast performance to keep your workflow smooth.
              </p>
            </div>
          </div>

          <div className="col-md-4 text-center mb-4">
            <div className="card p-3 shadow-sm">
              <h4 className="fw-bold">Responsive</h4>
              <p className="mt-2">
                Looks great on all devices including mobile and tablets.
              </p>
            </div>
          </div>

          <div className="col-md-4 text-center mb-4">
            <div className="card p-3 shadow-sm">
              <h4 className="fw-bold">Easy to Use</h4>
              <p className="mt-2">
                Clean and simple design that is beginner-friendly.
              </p>
            </div>
          </div>

        </div>
      </section>
      {/* About Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">About Us</h2>
          <p className="lead text-center mx-auto" style={{ maxWidth: "700px" }}>
            We build modern and efficient applications using the latest web technologies.
            Our mission is to create user-friendly experiences that help people achieve more.
          </p>
        </div>
      </section>
      {/* Call to Action */}
      <section className="text-center py-5">
        <div className="container">
          <h2 className="fw-bold">Ready to explore?</h2>
          <p className="mt-2">Join us and be a part of something amazing.</p>
          <button className="btn btn-primary btn-lg mt-3">
            Join Now
          </button>
        </div>
      </section>
      <Slide />
    </div>
  )
}

export default Home;
