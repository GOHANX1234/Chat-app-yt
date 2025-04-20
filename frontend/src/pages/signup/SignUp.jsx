import { Link } from "react-router-dom";
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

	const genderOptions = [
		{ label: "Male", value: "male", color: "text-blue-400", icon: "♂" },
		{ label: "Female", value: "female", color: "text-pink-400", icon: "♀" },
	];

	return (
		<div
			className='min-h-screen flex items-center justify-center bg-cover bg-center px-4'
			style={{ backgroundImage: "url('/bg.jpg')" }}
		>
			<div className='w-full max-w-sm bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-xl shadow-2xl p-6'>
				<h1 className='text-3xl font-bold text-center text-white mb-6'>
					Sign Up <span className='text-blue-400'>RizzNet</span>
				</h1>

				<form onSubmit={handleSubmit} className='space-y-4'>
					{["fullName", "username", "password", "confirmPassword"].map((field, idx) => (
						<div key={idx}>
							<label className='block text-sm text-white mb-1'>
								{field === "fullName"
									? "Full Name"
									: field === "confirmPassword"
									? "Confirm Password"
									: field.charAt(0).toUpperCase() + field.slice(1)}
							</label>
							<input
								type={field.includes("password") ? "password" : "text"}
								placeholder={
									field === "fullName"
										? "John Doe"
										: field === "username"
										? "johndoe"
										: field === "password"
										? "Enter Password"
										: "Confirm Password"
								}
								className='w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400'
								value={inputs[field]}
								onChange={(e) => setInputs({ ...inputs, [field]: e.target.value })}
							/>
						</div>
					))}

					<div className='mt-2'>
						<label className='block text-sm text-white mb-2'>Gender</label>
						<div className='flex justify-between gap-2'>
							{genderOptions.map(({ label, value, color, icon }) => (
								<button
									type='button'
									key={value}
									onClick={() => handleCheckboxChange(value)}
									className={`w-1/3 flex flex-col items-center py-2 rounded-lg border text-white transition-all ${
										inputs.gender === value
											? `bg-white bg-opacity-20 border-white shadow-md ${color}`
											: "bg-white bg-opacity-10 border-white border-opacity-20 hover:bg-opacity-20"
									}`}
								>
									<span className={`text-xl ${color}`}>{icon}</span>
									<span className='text-xs'>{label}</span>
								</button>
							))}
						</div>
					</div>

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
