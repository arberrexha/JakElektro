import React from 'react'
import { NavLink } from 'react-router-dom';





function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="/">Jak <span className="blue-text">Elektro.</span></a>
                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                     </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    
                    <NavLink to='/' className="nav-link active" >Home</NavLink>
                    </li>
                    <li className="nav-item">
                    
                    <NavLink to="/OurJobs" className="nav-link active" >OurJobs</NavLink>
                    </li>
                    <li className="nav-item">
                    
                    <NavLink to="/Aboutus" className="nav-link active" >Aboutus</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Contact
                    </a>
                 <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="./Contact">Contact</a></li>
                    
                    
                 </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </header>
  )
}

export default Header
