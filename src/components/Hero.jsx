import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { useGlobalState, setGlobalState } from '../store';
import JobListingCard  from './JobListingCard'

const Hero = () => {
  const [jobs] = useGlobalState('jobs')

  const openModal = ()=> {
    setGlobalState("createModal","scale-100")
  }

  return (
    <section className="min-h-[89vh] relative">
      {/* Floating Action Button */}
      <button
        className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white fixed bottom-8 right-8 shadow-glow hover-lift transition-all duration-300 z-40 group focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-400"
        onClick={openModal}
        aria-label="Create a new job"
      >
        <FaPlus className="text-xl group-hover:rotate-90 transition-transform duration-300" />
      </button>
      
      <main className="mt-11 sm:px-11 px-3">
        <div className="p-3">
          {/* Header Section */}
          <div className="bg-glass backdrop-blur-lg rounded-t-2xl border border-white/20 shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
              <h1 className="text-white text-3xl font-bold mb-2">Welcome to JobBoard</h1>
              <p className="text-blue-100 text-lg">Find the perfect job or hire the best talent</p>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-gray-700 dark:text-gray-300 text-2xl font-semibold">
                  {jobs.length > 0 ? "Available Jobs" : "No jobs available yet"}
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-slow"></div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {jobs.length} {jobs.length === 1 ? 'job' : 'jobs'} available
                  </span>
                </div>
              </div>
              
              {/* Job Listings */}
              <div className="space-y-4">
                {jobs.length > 0
                  ? jobs.map((job, i) => (
                      <div 
                        key={i}
                        className="animate-fade-in-up"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        <JobListingCard
                          jobListing={job}
                        />
                      </div>
                    ))
                  : (
                      <div className="text-center py-12">
                        <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaPlus className="text-3xl text-blue-500" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          No jobs posted yet
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 mb-6">
                          Be the first to post a job and start building your team
                        </p>
                        <button
                          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium shadow-glow hover-lift transition-all duration-300"
                          onClick={openModal}
                        >
                          Post Your First Job
                        </button>
                      </div>
                    )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Hero
