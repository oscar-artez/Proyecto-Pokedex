import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
<nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a href="./App.js" className="navbar-brand">Navbar</a>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button className="btn btn-outline-success" type="button">Search</button>
    </form>
  </div>
</nav>
    )
}

export default Navbar
