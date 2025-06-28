import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin, FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-glass backdrop-blur-lg border-t border-white/20 shadow-lg py-8 px-4 flex flex-col gap-8 md:flex-row md:justify-between md:items-center text-gray-700 dark:text-gray-300 text-sm mt-12 w-full animate-fade-in-up" aria-label="Footer">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">JobBoard</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              The decentralized job marketplace where talent meets opportunity. 
              Connect, collaborate, and build the future of work on the blockchain.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaGithub className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Browse Jobs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Post a Job</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">My Projects</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Messages</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 JobBoard. Built with <FaHeart className="inline text-red-500 mx-1" /> by BugWriters Team
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
