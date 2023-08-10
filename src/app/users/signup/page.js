"use client";
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Signup = () => {
	const router = useRouter();

	const [redirect, setRedirect] = useState(false);

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [jobTitle, setJobTitle] = useState('');
	const [number, setNumber] = useState('');
	const [streetAddress, setStreetAddress] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [zipCode, setZipCode] = useState('');
	const [error, setError] = useState(false);

	// create the 
	const handleFirstName = (e) => {
		// fill in code
		setFirstName(e.target.value);
	};

	const handleLastName = (e) => {
		// fill in code
		setLastName(e.target.value);
	};

	const handleEmail = (e) => {
		// fill in code
		setEmail(e.target.value);
	};

	const handlePassword = (e) => {
		// fill in code
		setPassword(e.target.value);
	};

	const handleJobTitle = (e) => {
		// fill in code
		setJobTitle(e.target.value);
	};

	const handleNumber = (e) => {
		// fill in code
		setNumber(e.target.value);
	};

	const handleStreetAddress = (e) => {
		// fill in code
		setStreetAddress(e.target.value);
	};

	const handleCity = (e) => {
		// fill in code
		setCity(e.target.value);
	};

	const handleState = (e) => {
		// fill in code
		setState(e.target.value);
	};

	const handleZipCode = (e) => {
		// fill in code
		setZipCode(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault(); // at the beginning of a submit function

		const newUser = {
			firstName,
			lastName,
			email,
			jobTitle,
			number,
			password,
			streetAddress,
			city,
			state,
			zipCode
		};
		axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/signup`, newUser)
			.then(response => {
				setRedirect(true);
			})
			.catch(error => {
				if (error.response.data.message === 'Email already exists') {
					console.log('===> Error in Signup', error.response.data.message);
					setError(true);
				}
			});

	};

	if (redirect) { router.push('/users/login'); }
	if (error) {
		return (
			<div>
				<div className="card text-white bg-primary py-5 d-md-down-none" style={{ width: "44%" }}>
					<div className="card-body text-center">
						<div>
							<p>Email already exists</p>
							<br />
							<h2>Login</h2>
							<p>Sign In to your account</p>
							<a href="/users/login" type="button" className="btn btn-primary active mt-3">Login</a>
							<span>  </span>
							<a href="/users/signup" type="button" className="btn btn-secondary active mt-3">Signup</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
	// You can have them redirected to profile (your choice)

	return (
		<section className="vh-100 bg-image"
			style={{ backgroundImage: "url('https://ca.slack-edge.com/T0351JZQ0-U04NEAZUL3T-20e13f3e4c10-512')", backgroundSize: "cover", backgroundPosition: "center" }}
		>
			<div className="mask d-flex align-items-center h-100 gradient-custom-3">
				<div className="container h-100">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="col-12 col-md-9 col-lg-7 col-xl-6">
							<div className="card" style={{ borderRadius: "15px", backgroundColor: 'rgba(210, 91, 234, 0.5)' }}>
								<div className="card-body p-5">
									<h2 className="text-center mb-5 text-light">Create your Timagotchi Account</h2>

									<form>

										<div className="form-outline mb-4 text-light">
											<input type="text" id="form3Example1cg" className="form-control form-control-lg" />
											<label className="form-label" htmlFor="form3Example1cg">Email</label>
										</div>

										<div className="form-outline mb-4 text-light">
											<input type="email" id="form3Example3cg" className="form-control form-control-lg" />
											<label className="form-label" htmlFor="form3Example3cg">Password</label>
										</div>

										<div className="form-outline mb-4 text-light">
											<input type="password" id="form3Example4cg" className="form-control form-control-lg" />
											<label className="form-label" htmlFor="form3Example4cg">First Name</label>
										</div>

										<div className="form-outline mb-4 text-light">
											<input type="password" id="form3Example4cdg" className="form-control form-control-lg" />
											<label className="form-label" htmlFor="form3Example4cdg">Last Name</label>
										</div>

										<div className="form-outline mb-4 text-light">
											<input type="password" id="form3Example4cdg" className="form-control form-control-lg" />
											<label className="form-label" htmlFor="form3Example4cdg">Location</label>
										</div>

										<div className="form-outline mb-4 text-light">
											<input type="date" className="form-control form-control-lg" />
											<label className="form-label" htmlFor="form3Example4cdg">Birthdate</label>
										</div>

										<div className="d-flex justify-content-center">
											<button type="button"
												className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
										</div>

										<p className="text-center mt-5 mb-0 text-light">Already have an account? <a href="/users/login"
											className="fw-bold text-body"><u>Login here</u></a></p>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section >
	);

};

export default Signup;