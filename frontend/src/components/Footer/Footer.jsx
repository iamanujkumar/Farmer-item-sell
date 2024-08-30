import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import LOGO from "../../assets/Logo_image.png"

function Footer() {
  return (
    <div className=" bg-gray-100 flex flex-col items-center justify-center gap-8 text-black py-10 px-6 sm:px-12 lg:px-24 mt-8 shadow-xl shadow-black/90">
      <div className='flex items-center justify-center '>
        <div className='border-2 border-black rounded-full p-1 shadow-md shadow-black'>
        <img
          src={LOGO}
          alt="Logo"
          className="h-48 w-48 sm:h-40 sm:w-40 md:h-32 md:w-32 lg:h-28 lg:w-28"
        />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center  gap-8">
        <div className="flex lg:w-1/2 flex-col items-start justify-center">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-6">
            Empowering farmers by connecting them directly with buyers, ensuring fresh, quality crops at fair prices. Supporting sustainable agriculture and fostering a healthier community through farm-to-table solutions.
          </p>
          <Link to={"/About"}>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md transition-all duration-500">
              Know More ...
            </button>
          </Link>
        </div>

        <div className="flex lg:w-1/2 flex-col items-start justify-center text-lg">
          <div>
            <h2 className="text-2xl font-bold mb-4">Let’s Talk</h2>
            <span className="font-semibold">Email</span>:{" "}
            <a
              href="mailto:Farmer@shop.com"
              className="text-green-400 hover:text-green-500"
            >
              Farmer@shop.com
            </a>
          </div>
          <div>
            <span className="font-semibold">Phone</span>:{" "}
            <a
              href="tel:+9305009047"
              className="text-green-400 hover:text-green-500"
            >
              (+91) 9305009047
            </a>
          </div>
          <div>
            <span className="font-semibold">Address</span>: 1 Paya Lebar Link
            #04-01, Paya Lebar Quarter
            Singapore, 408533
          </div>

          <div className="flex justify-center mt-4 space-x-6">
            <a href="https://facebook.com" aria-label="Facebook" className="text-black hover:text-blue-500 transition-all duration-500">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="text-black hover:text-blue-400 transition-all duration-500">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="text-black hover:text-pink-500 transition-all duration-500">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="text-black hover:text-blue-700 transition-all duration-500">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className='flex items-end justify-center mt-8'>Copyright © 2024 CROP SELLER. All rights reserved.</div>
    </div>
  )
}

export default Footer
