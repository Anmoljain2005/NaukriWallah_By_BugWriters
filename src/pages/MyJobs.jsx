import React from 'react'
import { Header, JobBid } from '../components'
import { useGlobalState } from '../store'
import { FaBriefcase, FaInbox } from 'react-icons/fa'

const MyJobs = () => {
  const [mygigs] = useGlobalState('mygigs')

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
          
          <div className="mt-11 px-4 py-8">
            <div className="max-w-6xl mx-auto">
              {/* Header Section */}
              <div className="bg-glass backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg p-6 mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <FaBriefcase className="text-2xl text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gradient">My Assigned Jobs</h1>
                    <p className="text-gray-600 dark:text-gray-400">
                      Track your current assignments and project progress
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-slow"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {mygigs.length} {mygigs.length === 1 ? 'job' : 'jobs'} assigned
                    </span>
                  </div>
                </div>
              </div>

              {/* Jobs List */}
              <div className="space-y-6">
                {mygigs.length > 0 ? (
                  mygigs.map((mygig, i) => (
                    <div 
                      key={i}
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <JobBid jobListing={mygig} />
                    </div>
                  ))
                ) : (
                  <div className="bg-glass backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg p-12 text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FaInbox className="text-4xl text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      No Assigned Jobs Yet
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto">
                      You don't have any assigned tasks at the moment. Start bidding on jobs to get assigned to projects.
                    </p>
                    <a 
                      href="/"
                      className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium shadow-glow hover-lift transition-all duration-300"
                    >
                      Browse Available Jobs
                    </a>
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

export default MyJobs
