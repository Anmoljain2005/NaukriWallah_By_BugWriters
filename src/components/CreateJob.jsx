import React, { useState } from 'react'
import { setGlobalState, truncate, useGlobalState } from '../store'
import { FaTimes, FaPlus } from 'react-icons/fa'
import { addJobListing } from '../services/blockchain'
import { toast } from 'react-toastify'

const CreateJob = () => {
  const [createModal] = useGlobalState('createModal')
  const [jobTitle, setJobTitle] = useState('')
  const [prize, setPrize] = useState('')
  const [description, setDescription] = useState('')
  const [skill, setSkill] = useState('')
  const [skills, setSkills] = useState([])

  const addSkills = () => {
    if (skills.length != 5) {
      setSkills((prevState) => [...prevState, skill])
    }
    setSkill('')
  }

  const removeSkill = (index) => {
    skills.splice(index, 1)
    setSkills(() => [...skills])
  }

  const closeModal = () => {
    setGlobalState('createModal', 'scale-0')
    setJobTitle('')
    setPrize('')
    setSkills([])
    setSkill('')
    setDescription('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (jobTitle == '' || prize == '' || skills.length < 3 || description == '')
      return

    const params = {
      jobTitle,
      description,
      tags: skills.slice(0, 5).join(','),
      description,
      prize,
    }

    await toast.promise(
      new Promise(async (resolve, reject) => {
        await addJobListing(params)
          .then(async (tx) => {
            closeModal()
            resolve(tx)
          })
          .catch(() => reject())
      }),
      {
        pending: 'Approve transaction...',
        success: 'job added successfully 👌',
        error: 'Encountered error 🤯',
      }
    )
  }

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center
    bg-black bg-opacity-50 backdrop-blur-sm transform z-50 transition-all duration-300 ${createModal}`}
    >
      <div className="bg-glass backdrop-blur-lg text-gray-800 dark:text-gray-200 shadow-2xl rounded-2xl w-11/12 md:w-2/5 max-h-[90vh] overflow-y-auto border border-white/20">
        <div className="relative p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-2">Create a Job</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Post a new job and find the perfect candidate
              </p>
            </div>
            <button
              onClick={closeModal}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-300 focus-ring"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="bg-glass backdrop-blur-lg rounded-2xl p-8 shadow-lg flex flex-col gap-6 max-w-xl mx-auto mt-6 animate-fade-in-up border border-white/20 space-y-6" aria-label="Create Job Form">
            {/* Job Title */}
            <div className="space-y-2">
              <label htmlFor="jt" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Job Title
              </label>
              <input
                id="jt"
                value={jobTitle}
                placeholder="e.g. Senior React Developer..."
                type="text"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                onChange={(e) => setJobTitle(e.target.value)}
                required
              />
            </div>

            {/* Prize */}
            <div className="space-y-2">
              <label htmlFor="prize" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Prize (ETH)
              </label>
              <input
                id="prize"
                value={prize}
                placeholder="e.g. 0.04"
                step={0.0001}
                type="text"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                onChange={(e) => setPrize(e.target.value)}
                required
              />
            </div>

            {/* Skills */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Featured Skills (3-5 skills)
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={skill}
                  className="w-full px-4 py-3 pr-16 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="e.g. React, TypeScript..."
                  onChange={(e) => setSkill(e.target.value)}
                />
                {skills.length != 5 && (
                  <button
                    type="button"
                    onClick={addSkills}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    <FaPlus className="text-sm" />
                  </button>
                )}
              </div>
              
              {/* Skills Display */}
              <div className="flex items-center flex-wrap gap-2 mt-3">
                {skills.map((skill, i) => (
                  <div
                    key={i}
                    className="px-3 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 rounded-full font-medium flex items-center space-x-2 text-sm border border-blue-200 dark:border-blue-700"
                  >
                    <span>{truncate(skill, 4, 4, 11)}</span>
                    <button
                      onClick={() => removeSkill(i)}
                      type="button"
                      className="hover:bg-blue-200 dark:hover:bg-blue-800 rounded-full p-1 transition-colors duration-300"
                    >
                      <FaTimes className="text-xs" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label htmlFor="desc" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Description
              </label>
              <textarea
                id="desc"
                value={description}
                placeholder="Describe the job requirements, responsibilities, and what you're looking for..."
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                rows="4"
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 px-6 rounded-xl font-medium shadow-glow-green hover-lift transition-all duration-300 focus-ring"
              >
                Create Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateJob
