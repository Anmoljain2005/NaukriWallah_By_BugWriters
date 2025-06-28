import React from 'react'
import { truncate } from '../store'
import { acceptBid } from '../services/blockchain'
import { toast } from 'react-toastify'
import { MdOutlineChat } from 'react-icons/md'
import { FaUser, FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ApplicantsCard = ({ bidder }) => {
  const handleAcceptingBid = async (bid, jid, account) => {
    await toast.promise(
      new Promise(async (resolve, reject) => {
        await acceptBid(bid, jid, account)
          .then(async () => resolve())
          .catch(() => reject())
      }),
      {
        pending: 'Approve transaction...',
        success: 'bid accepted successfully 👌',
        error: 'Encountered error 🤯',
      }
    )
  }

  return (
    <div className="bg-glass backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 p-6 hover-lift transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-400 flex flex-col gap-4 animate-fade-in-up">
      <div className="flex items-center justify-between flex-wrap gap-4">
        {/* Applicant Info */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <FaUser className="text-xl text-white" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
              {truncate(bidder.account, 4, 4, 11)}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Applicant ID: {bidder.id}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          <Link
            to={`/chats/${bidder.account}`}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-full font-medium shadow-glow hover-lift transition-all duration-300 focus-ring flex items-center space-x-2"
          >
            <MdOutlineChat size={18} />
            <span>Chat</span>
          </Link>
          
          <button
            onClick={() =>
              handleAcceptingBid(bidder.id, bidder.jId, bidder.account)
            }
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-4 py-2 rounded-full font-medium shadow-glow-green hover-lift transition-all duration-300 focus-ring flex items-center space-x-2"
          >
            <FaCheck size={16} />
            <span>Accept</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ApplicantsCard
