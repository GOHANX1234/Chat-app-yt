import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 px-4'>
			<div className='w-full max-w-sm bg-gray-800 rounded-2xl shadow-xl p-6'>
				<h1 className='text-4xl font-bold text-center text-white mb-6'>
					Welcome to <span className='text-blue-500'>RizzNet</span>
				</h1>

				<form onSubmit={handleSubmit} className='space-y-4'>
					<div>
						<label className='block text-sm text-gray-300 mb-1'>Username</label>
						<input
							type='text'
							placeholder='Enter your username'
							className='w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div>
						<label className='block text-sm text-gray-300 mb-1'>Password</label>
						<input
							type='password'
							placeholder='Enter your password'
							className='w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<Link
						to='/signup'
						className='text-sm text-blue-400 hover:underline block text-right'
					>
						Don't have an account?
					</Link>

					<button
						type='submit'
						className='w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200 disabled:opacity-50'
						disabled={loading}
					>
						{loading ? (
							<span className='loading loading-spinner'></span>
						) : (
							"Log In"
						)}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
