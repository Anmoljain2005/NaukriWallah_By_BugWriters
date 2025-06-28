import React from 'react'
import { FaEthereum, FaComments } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const JobBid = ({ jobListing }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover-lift border border-gray-200 dark:border-gray-700 p-6 transition-all duration-300 group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <h4 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {jobListing.jobTitle}
        </h4>
        <div className="flex items-center bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 px-3 py-1 rounded-full">
          <FaEthereum className="text-green-600 dark:text-green-400 text-lg mr-1" />
          <span className="text-green-700 dark:text-green-300 font-semibold">
            {parseFloat(jobListing.prize).toFixed(2)} ETH
          </span>
        </div>
      </div>

      {/* Tags */}
      <div className="flex items-center flex-wrap gap-2 mb-4">
        {jobListing.tags.length > 0
          ? jobListing.tags.map((tag, i) => (
              <span 
                key={i} 
                className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700"
              >
                {tag}
              </span>
            ))
          : (
              <span className="text-gray-500 dark:text-gray-400 text-sm italic">
                No tags specified
              </span>
            )}
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
        {jobListing.description}
      </p>

      {/* Action Button */}
      <div className="flex justify-end">
        <Link
          to={`/chats/${jobListing.owner}`}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-full font-medium shadow-glow hover-lift transition-all duration-300 focus-ring flex items-center space-x-2"
        >
          <FaComments className="text-lg" />
          <span>Chat with Owner</span>
        </Link>
      </div>
    </div>
  )
}

export default JobBid
