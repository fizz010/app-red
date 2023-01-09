import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

function Navbar() {
    const amount=useSelector(state=>state.amount)
  return (     
    <div>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><h3>Employees</h3></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={"/"} className="nav-link active" aria-current="page" ><b>Home</b></Link>
        </li>
        <li className="nav-item">
          <Link to={"/emp"} className="nav-link" ><b>Employess</b></Link>
        </li>
       
      </ul>
      <div>
        <button disabled={false} className="btn btn-secondary">Your Balance : {amount}</button>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
