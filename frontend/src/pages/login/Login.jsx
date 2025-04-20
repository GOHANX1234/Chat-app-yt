import { useState } from "react"; import { Link } from "react-router-dom"; import { MessageCircle } from "lucide-react"; import useLogin from "../../hooks/useLogin";

const Login = () => { const [username, setUsername] = useState(""); const [password, setPassword] = useState(""); const { loading, login } = useLogin();

const handleSubmit = async (e) => { e.preventDefault(); await login(username, password); };

return ( <div className="min-h-screen flex items-center justify-center bg-black p-4"> <div className="w-full max-w-xs bg-gray-800 rounded-2xl shadow-lg p-6 space-y-6"> <div className="flex items-center justify-center space-x-3"> <MessageCircle className="w-8 h-8 text-blue-500" /> <h1 className="text-2xl font-bold text-white">RizzNet Chat</h1> </div> <form onSubmit={handleSubmit} className="space-y-4"> <div> <label htmlFor="username" className="block text-sm font-medium text-gray-300"> Username </label> <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" className="mt-1 w-full bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" /> </div>

<div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-300">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="mt-1 w-full bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition disabled:opacity-50"
      >
        {loading ? <span className="loading loading-spinner text-white"></span> : "Login"}
      </button>
    </form>

    <div className="text-center">
      <Link to="/signup" className="text-sm text-blue-400 hover:underline">
        Don't have an account?
      </Link>
    </div>
  </div>
</div>

); };

export default Login;

