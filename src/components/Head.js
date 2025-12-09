import React from 'react'

function Head() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                MyApp
                </a>

                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                >
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                        Home
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">
                        About
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">
                        Contact
                    </a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
    
  )
}

export default Head;

