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
		<div
			className='min-h-screen flex items-center justify-center bg-cover bg-center px-4'
			style={{
				backgroundImage: "url('/bg.jpg')", // replace with your image path
			}}
		>
			<div className='w-full max-w-sm bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-xl shadow-2xl p-6'>
				<h1 className='text-3xl font-bold text-center text-white mb-6'>
					Login to <span className='text-blue-400'>RizzNet</span>
				</h1>

				<form onSubmit={handleSubmit} className='space-y-4'>
					<div>
						<label className='block text-sm text-white mb-1'>Username</label>
						<input
							type='text'
							placeholder='Enter your username'
							className='w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div>
						<label className='block text-sm text-white mb-1'>Password</label>
						<input
							type='password'
							placeholder='Enter your password'
							className='w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<Link
						to='/signup'
						className='text-sm text-blue-300 hover:underline block text-right'
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
