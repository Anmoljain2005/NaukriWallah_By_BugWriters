import React from 'react'
import { Header, Hero, CreateJob } from '../components'

const Home = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-100 to-indigo-200 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 flex flex-col" aria-label="Homepage">
      <section className="relative flex-1">
        {/* Subtle static background gradient */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100/90 via-blue-100/80 to-indigo-200/90 dark:from-gray-900/95 dark:via-gray-800/90 dark:to-slate-900/95 backdrop-blur-2xl"></div>
        </div>
        {/* Main content */}
        <div className="relative z-10 flex flex-col min-h-[90vh]">
          <Header />
          <div className="flex flex-col gap-8 px-2 sm:px-6 md:px-12 max-w-7xl mx-auto w-full">
            <section className="animate-fade-in-up mt-4" aria-label="Hero Section">
              <Hero />
            </section>
            <section className="animate-slide-in-right" aria-label="Create Job">
              <CreateJob />
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
