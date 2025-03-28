import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
    <div className="logo">SkyBooking<span className="dot">.</span></div>
    <ul className="nav-links">
      <Link to={"/"}>Home</Link>
      <span style={{ padding: "0 10px" }}></span>

      <Link >About </Link> 
      <span style={{ padding: "0 10px" }}></span>

      <Link to={"/create-flight"}>Add Flights</Link>
      <span style={{ padding: "0 10px" }}></span>
      
      <Link  to={"/all-flight"} >Flights</Link>
      <span style={{ padding: "0 10px" }}></span>

      <Link to={"/booking-flight"}>Booking</Link>

      <li><a href="#">Contact</a></li>
    </ul>
    <button className="btn">Book Now</button>
  </div>
  )
}

export default Navbar