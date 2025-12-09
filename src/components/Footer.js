import React from 'react'

function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">&copy; 2025 MyApp. All rights reserved.</p>
        <div>
          <a href="#" className="text-light mx-2 text-decoration-none">Home</a>
          <a href="#" className="text-light mx-2 text-decoration-none">About</a>
          <a href="#" className="text-light mx-2 text-decoration-none">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;