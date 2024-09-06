import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaSeedling, FaTractor } from 'react-icons/fa';
import logo from '../../assets/logo-two.png'
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-emerald-400 from-10% via-green-500 via-30% to-emerald-300 text-white py-10">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-green-700 pb-8 mb-8">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <img src={logo} alt="" />
            </div>
            <p className="text-slate-200 mt-2">
              Connecting farmers to markets, sharing knowledge, and promoting sustainable agricultural practices.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-8">
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul>
                <li><a href="/" className="hover:text-green-300">Home</a></li>
                <li><a href="/about" className="hover:text-green-300">About Us</a></li>
                <li><a href="/services" className="hover:text-green-300">Services</a></li>
                <li><a href="/contact" className="hover:text-green-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Resources</h3>
              <ul>
                <li><a href="/blog" className="hover:text-green-300">Blog</a></li>
                <li><a href="/news" className="hover:text-green-300">Latest News</a></li>
                <li><a href="/faq" className="hover:text-green-300">FAQ</a></li>
                <li><a href="/support" className="hover:text-green-300">Support</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Media */}
          <div className="flex gap-4 mb-4 md:mb-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300"><FaFacebook size={24} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300"><FaTwitter size={24} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300"><FaInstagram size={24} /></a>
            <a href="https://www.linkedin.com/in/anuj-kumar-a7954a257/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300"><FaLinkedin size={24} /></a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            <p>© 2024 AgriLife. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;