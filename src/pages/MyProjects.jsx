import React from 'react'
import {
  DeleteJob,
  Header,
  JobListingOwnerActions,
  Payout,
  UpdateJob,
} from '../components'
import { useGlobalState } from '../store'
import { FaProjectDiagram, FaPlus } from 'react-icons/fa'

const MyProjects = () => {
  const [myjobs] = useGlobalState('myjobs')
  const [connectedAccount] = useGlobalState('connectedAccount')

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
          
          <div className="px-5 py-8">
            <div className="max-w-6xl mx-auto">
              {/* Header Section */}
              <div className="bg-glass backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg p-6 mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                    <FaProjectDiagram className="text-2xl text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gradient">My Projects</h1>
                    <p className="text-gray-600 dark:text-gray-400">
                      Manage your posted jobs and track project progress
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-slow"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {myjobs.length} {myjobs.length === 1 ? 'project' : 'projects'} posted
                    </span>
                  </div>
                </div>
              </div>

              {/* Projects List */}
              <div className="space-y-6">
                {myjobs.length > 0 ? (
                  myjobs.map((myjob, i) => (
                    <div 
                      key={i}
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <JobListingOwnerActions
                        jobListing={myjob}
                        editable={myjob.owner == connectedAccount}
                      />
                    </div>
                  ))
                ) : (
                  <div className="bg-glass backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg p-12 text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FaPlus className="text-4xl text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      No Projects Posted Yet
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto">
                      Start by posting your first job and find the perfect candidate for your project.
                    </p>
                    <a 
                      href="/"
                      className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full font-medium shadow-glow-purple hover-lift transition-all duration-300"
                    >
                      Post Your First Job
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <UpdateJob />
      <DeleteJob />
      <Payout />
    </div>
  )
}

export default MyProjects
