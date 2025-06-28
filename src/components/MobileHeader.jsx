import React from 'react'
import { Link } from 'react-router-dom'
import { connectWallet } from '../services/blockchain'
import { truncate, useGlobalState } from '../store'

const MobileHeader = ({ toggle }) => {
  const [connectedAccount] = useGlobalState('connectedAccount')

  return (
    <nav aria-label="Mobile Navigation"
      className={`md:hidden block absolute top-5 right-0 py-4 px-6 bg-glass backdrop-blur-lg shadow-2xl rounded-2xl border border-white/20 transition-all duration-300 ${
        toggle ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-2'
      }`}
    >
      <div className="flex flex-col space-y-4">
        <Link 
          to={'/mybids'} 
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium py-2 px-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          My Bids
        </Link>
        <Link 
          to={'/myjobs'} 
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium py-2 px-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
        >
          My Jobs
        </Link>
        <Link 
          to={'/myprojects'} 
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium py-2 px-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
        >
          My Projects
        </Link>
        <Link 
          to={'/messages'} 
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium py-2 px-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
        >
          Messages
        </Link>

        {connectedAccount ? (
          <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 px-4 rounded-full font-medium shadow-glow-green hover-lift transition-all duration-300">
            {truncate(connectedAccount, 4, 4, 11)}
          </button>
        ) : (
          <button
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-2 px-4 rounded-full font-medium shadow-glow hover-lift transition-all duration-300"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </nav>
  )
}

export default MobileHeader
