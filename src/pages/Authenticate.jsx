import { toast } from 'react-toastify'
import { Header } from '../components'
import { loginWithCometChat, signUpWithCometChat } from '../services/chat'
import { setGlobalState, useGlobalState } from '../store'
import { useNavigate } from 'react-router-dom'
import { FaComments, FaSignInAlt, FaUserPlus } from 'react-icons/fa'

const Authenticate = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  const navigate = useNavigate()

  const handleSignUp = async () => {
    await toast.promise(
      new Promise(async (resolve, reject) => {
        await signUpWithCometChat(connectedAccount)
          .then((user) => resolve(user))
          .catch((error) => {
            alert(JSON.stringify(error))
            reject(error)
          })
      }),
      {
        pending: 'Signing up...',
        success: 'Signed up successfully, please login 👌',
        error: 'Encountered error 🤯',
      }
    )
  }

  const handleLogin = async () => {
    await toast.promise(
      new Promise(async (resolve, reject) => {
        await loginWithCometChat(connectedAccount)
          .then((user) => {
            setGlobalState('currentUser', user)
            navigate('/messages')
            resolve(user)
          })
          .catch((error) => {
            alert(JSON.stringify(error))
            reject(error)
          })
      }),
      {
        pending: 'Logging...',
        success: 'Logged in successfully 👌',
        error: 'Encountered error 🤯',
      }
    )
  }

  return (
    <>
      <Header />

      <div className="flex items-center justify-center min-h-[80vh] px-4">
        <div className="w-full max-w-md">
          <div className="bg-glass backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 animate-fade-in-up">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                <FaComments className="text-3xl text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gradient mb-2">Chat Authentication</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Login or sign up to start chatting with your clients
              </p>
            </div>

            {connectedAccount && (
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 rounded-xl p-4 mb-6 border border-green-200 dark:border-green-700">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-slow"></div>
                  <span className="text-green-700 dark:text-green-300 font-medium">
                    Wallet Connected: {connectedAccount.slice(0, 6)}...{connectedAccount.slice(-4)}
                  </span>
                </div>
              </div>
            )}

            <div className="space-y-4">
              <button
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-6 rounded-xl font-medium shadow-glow hover-lift transition-all duration-300 focus-ring flex items-center justify-center space-x-2"
              >
                <FaSignInAlt className="text-lg" />
                <span>Login to Chat</span>
              </button>
              
              <button
                onClick={handleSignUp}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 px-6 rounded-xl font-medium shadow-glow-green hover-lift transition-all duration-300 focus-ring flex items-center justify-center space-x-2"
              >
                <FaUserPlus className="text-lg" />
                <span>Sign Up</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Authenticate
