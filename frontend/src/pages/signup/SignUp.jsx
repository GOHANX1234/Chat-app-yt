import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
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
					Sign Up <span className='text-blue-400'>RizzNet</span>
				</h1>

				<form onSubmit={handleSubmit} className='space-y-4'>
					<div>
						<label className='block text-sm text-white mb-1'>Full Name</label>
						<input
							type='text'
							placeholder='John Doe'
							className='w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400'
							value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
						/>
					</div>

					<div>
						<label className='block text-sm text-white mb-1'>Username</label>
						<input
							type='text'
							placeholder='johndoe'
							className='w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400'
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
						/>
					</div>

					<div>
						<label className='block text-sm text-white mb-1'>Password</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400'
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>

					<div>
						<label className='block text-sm text-white mb-1'>Confirm Password</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400'
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
						/>
					</div>

					<GenderCheckbox
						onCheckboxChange={handleCheckboxChange}
						selectedGender={inputs.gender}
					/>

					<Link
						to={"/login"}
						className='text-sm text-blue-300 hover:underline block text-right'
					>
						Already have an account?
					</Link>

					<button
						type='submit'
						className='w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200 disabled:opacity-50'
						disabled={loading}
					>
						{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
