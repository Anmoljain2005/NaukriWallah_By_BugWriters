import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connectWallet } from '../services/blockchain'
import { truncate, useGlobalState } from '../store'
import { BsList, BsX } from 'react-icons/bs'
import MobileHeader from './MobileHeader'

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="bg-glass backdrop-blur-lg w-full mx-auto p-5 flex justify-between items-center flex-wrap shadow-lg border-b border-white/20 sticky top-0 z-50 transition-all duration-300" aria-label="Main Navigation">
      <Link 
        className="text-gradient font-[risque] text-3xl font-bold hover-lift transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded" 
        to={'/'}
        aria-label="Home"
      >
        NaukriWallah
      </Link>
      
      <div className="items-center space-x-6 md:block hidden">
        <Link 
          to={'/mybids'} 
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium relative group"
        >
          My Bids
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
        
        <Link 
          to={'/myjobs'} 
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium relative group"
        >
          My Jobs
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
        
        <Link 
          to={'/myprojects'} 
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium relative group"
        >
          My Projects
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
        
        <Link 
          to={'/messages'} 
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium relative group"
        >
          Messages
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
        </Link>

        {connectedAccount ? (
          <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 px-6 rounded-full font-medium shadow-glow-green hover-lift transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400">
            {truncate(connectedAccount, 4, 4, 11)}
          </button>
        ) : (
          <button
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-6 rounded-full font-medium shadow-glow hover-lift transition-all duration-300 focus-ring hover:from-blue-600 hover:to-purple-700"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        )}
      </div>

      <div className="md:hidden block relative" onClick={handleToggle}>
        {!isOpen ? (
          <BsList className="text-3xl cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300" />
        ) : (
          <BsX className="text-3xl cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300" />
        )}
        <MobileHeader toggle={isOpen} />
      </div>
    </header>
  )
}

export default Header
