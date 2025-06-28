import React from 'react'
import { jobs } from '../store/data'
import { Header, JobListingOwnerActions } from "../components";
import UpdateJob from '../components/UpdateJob';

const JobListing = () => {
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
          
          <div className="mt-8 px-8 py-8">
            <div className="max-w-6xl mx-auto">
              <div className="animate-fade-in-up">
                <JobListingOwnerActions jobListing={jobs} editable={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <UpdateJob />
    </div>
  );
}

export default JobListing