import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";


function Footer() {
  return (
    <div>
       <footer id="footer">
        
        <footer className="bg-blue-900 text-white py-6 mt-10">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-xl font-semibold">Airline Booking System</h2>
    <p className="text-sm mt-2">Your trusted travel partner</p>

    {/* Centered Social Media Icons */}
    <div className="w-full flex justify-center mt-4">
      <div className="flex space-x-6">
        <a href="#" className="text-gray-300 hover:text-white transition duration-300 transform hover:scale-110">
          <FaFacebook size={24} />
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition duration-300 transform hover:scale-110">
          <FaTwitter size={24} />
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition duration-300 transform hover:scale-110">
          <FaInstagram size={24} />
        </a>
      </div>
    </div>

    {/* Copyright */}
    <p className="text-xs mt-4">&copy; {new Date().getFullYear()} Airline Booking System. All rights reserved.</p>
  </div>
</footer>
        <div class="credite text-center">
            Designed By <a href="#">SA Coding</a>
        </div>
    </footer>

    </div>
  )
}

export default Footer