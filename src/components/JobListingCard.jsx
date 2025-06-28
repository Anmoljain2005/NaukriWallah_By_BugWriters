import React from 'react'
import { FaEthereum } from 'react-icons/fa'
import { bidForJob, bidStatus } from '../services/blockchain'
import { toast } from 'react-toastify'
import { useGlobalState } from '../store'
import { useNavigate } from 'react-router-dom'

const JobListingCard = ({ jobListing }) => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  const navigate = useNavigate()

  const handleBidding = async (id) => {
    await toast.promise(
      new Promise(async (resolve, reject) => {
        await bidForJob(id)
          .then(async () => {
            await bidStatus(id)
            resolve()
          })
          .catch(() => reject())
      }),
      {
        pending: 'Approve transaction...',
        success: 'Application successful 👌',
        error: 'Encountered error 🤯',
      }
    )
  }

  const manageAdminTasks = () => {
    navigate('/myprojects')
  }

  return (
    <div className="bg-glass backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 p-6 transition-all duration-300 group hover:shadow-xl hover:scale-[1.02] focus-within:ring-2 focus-within:ring-blue-400 flex flex-col gap-4 animate-fade-in-up">
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
        {connectedAccount != jobListing.owner &&
        !jobListing.bidders.includes(connectedAccount) ? (
          <button
            onClick={() => handleBidding(jobListing.id)}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-2 rounded-full font-medium shadow-glow-green hover-lift transition-all duration-300 focus-ring"
          >
            Place Bid
          </button>
        ) : connectedAccount != jobListing.owner &&
          jobListing.bidders.includes(connectedAccount) ? (
          <button className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900 text-yellow-700 dark:text-yellow-300 px-6 py-2 rounded-full font-medium border border-yellow-200 dark:border-yellow-700">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse-slow"></div>
              <span>Request Pending</span>
            </div>
          </button>
        ) : (
          <button
            onClick={manageAdminTasks}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-full font-medium shadow-glow hover-lift transition-all duration-300 focus-ring"
          >
            Manage Project
          </button>
        )}
      </div>
    </div>
  )
}

export default JobListingCard
