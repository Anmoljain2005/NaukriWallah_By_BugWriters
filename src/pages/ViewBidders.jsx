import React, { useEffect } from 'react'
import { getBidders, getJob } from '../services/blockchain'
import { useParams } from 'react-router-dom'
import { useGlobalState } from '../store'
import { ApplicantsCard, Header } from '../components'
import { FaUsers, FaCheckCircle, FaClock } from 'react-icons/fa'

const ViewBidders = () => {
  const { id } = useParams()
  const [bidders] = useGlobalState('bidders')
  const [job] = useGlobalState('job')

  const fetchBidders = async () => {
    await getBidders(id)
    await getJob(id)
  }

  useEffect(() => {
    fetchBidders()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900">
      <div className="relative">
        {/* Subtle static background gradient */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100/90 via-blue-100/80 to-indigo-200/90 dark:from-gray-900/95 dark:via-gray-800/90 dark:to-slate-900/95 backdrop-blur-2xl"></div>
        </div>
        
        {/* Main content */}
        <div className="relative z-10">
          <Header />
          
          <div className="px-20 max-sm:px-4 mt-20 py-8">
            <div className="max-w-6xl mx-auto">
              {/* Header Section */}
              <div className="bg-glass backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg p-6 mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <FaUsers className="text-2xl text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gradient">Job Applicants</h1>
                    <p className="text-gray-600 dark:text-gray-400">
                      Review and manage applications for your job posting
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-slow"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {bidders?.length || 0} {bidders?.length === 1 ? 'applicant' : 'applicants'}
                    </span>
                  </div>
                  
                  {!job?.listed && (
                    <div className="flex items-center space-x-2 bg-green-100 dark:bg-green-900 px-3 py-1 rounded-full">
                      <FaCheckCircle className="text-green-600 dark:text-green-400" />
                      <span className="text-green-700 dark:text-green-300 text-sm font-medium">Position Filled</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Applicants List */}
              <div className="space-y-6">
                {bidders?.length > 0 ? (
                  bidders.map((bidder, i) => (
                    <div 
                      key={i}
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <ApplicantsCard bidder={bidder} />
                    </div>
                  ))
                ) : (
                  <div className="bg-glass backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg p-12 text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FaClock className="text-4xl text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      {!job?.listed ? 'Position Filled' : 'No Applicants Yet'}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto">
                      {!job?.listed 
                        ? 'This position has been filled. Thank you for your interest.'
                        : 'No applications have been submitted yet. Check back later for updates.'
                      }
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewBidders
