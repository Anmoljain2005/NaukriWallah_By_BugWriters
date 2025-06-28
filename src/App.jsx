import { Routes, Route } from 'react-router-dom'
import {
  Home,
  JobListing,
  MyProjects,
  Chats,
  ViewBidders,
  MyBids,
  MyJobs,
  RecentConversations,
} from './pages'
import { ToastContainer } from 'react-toastify'
import { useEffect } from 'react'
import { isWalletConnected } from './services/blockchain'
import AuthenticatedRoutes from './utils/AuthenticatedRoutes'
import Authenticate from './pages/Authenticate'
import { useGlobalState } from './store'

const App = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  
  useEffect(() => {
    isWalletConnected()
  }, [connectedAccount])

  return (
    <div className="min-h-screen font-[poppins] bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 transition-all duration-300">
      <div className="relative">
        {/* Animated background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Main content */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/joblisting/:id" element={<JobListing />} />
            <Route path="/myprojects" element={<MyProjects />} />
            <Route path="/viewbidders/:id" element={<ViewBidders />} />
            <Route path="/mybids" element={<MyBids />} />
            <Route path="/myjobs" element={<MyJobs />} />
            <Route path="/authenticate" element={<Authenticate />} />

            <Route element={<AuthenticatedRoutes />}>
              <Route path="/messages" element={<RecentConversations />} />
              <Route path="/chats/:id" element={<Chats />} />
            </Route>
          </Routes>
        </div>
      </div>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastClassName="!bg-gray-800 !text-white !border !border-gray-600"
        progressClassName="!bg-gradient-to-r !from-blue-500 !to-purple-500"
      />
    </div>
  )
}

export default App
