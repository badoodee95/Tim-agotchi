"use client";
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '@/app/signup.module.css';

const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [location, setLocation] = useState('');
	const [birthdate, setBirthdate] = useState('');

	const [error, setError] = useState(false);

	const [redirect, setRedirect] = useState(false);
	const router = useRouter();

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleFirstName = (e) => {
		setFirstName(e.target.value);
	};

	const handleLastName = (e) => {
		setLastName(e.target.value);
	};

	const handleLocation = (e) => {
		setLocation(e.target.value);
	};

	const handleBirthdate = (e) => {
		setBirthdate(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newUser = { email, password, firstName, lastName, location, birthdate };
		console.log(newUser);
		axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/signup`, newUser)
			.then(response => {
				// console.log('response', response.data);
				if (typeof window !== 'undefined') {
					localStorage.setItem('email', response.data.user.email);
					localStorage.setItem('userId', response.data.user._id);
				}
				setRedirect(true);
			})
			.catch(error => {
				if (error.response.data.message === 'Email already exists') {
					console.log('===> Error in Signup', error.response.data.message);
					// setError(true);
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
							<Link href="/users/login" type="button" className="btn btn-primary active mt-3">Login</Link>
							<span>  </span>
							<Link href="/users/signup" type="button" className="btn btn-secondary active mt-3">Signup</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<section className="vh-100 vw-100 bg-image"
			style={{ backgroundImage: "url('https://img.freepik.com/free-vector/frame-with-dogs-vector-white-background_53876-127700.jpg?w=2000')", backgroundSize: "cover", backgroundPosition: "center" }}>
			<div className="mask d-flex align-items-center h-100 gradient-custom-3">
				<div className="container h-100">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="col-12 col-md-9 col-lg-7 col-xl-6">
							<div className="card" id={styles.signupBox} style={{ borderRadius: "15px", backgroundColor: 'rgba(210, 91, 234, 0.5)' }}>
								<div className="card-body p-5">
									<h2 className="text-center mb-5 text-light">Create your Timagotchi Account</h2>

									<form onSubmit={handleSubmit} className='text-center'>
										<div className="form-outline mb-4 text-light">
											<label className="form-label" htmlFor="form3Example4cg">Email</label>
											<input type="email" name="email" value={email} onChange={handleEmail} className="form-control" required />
										</div>
										<div className="form-outline mb-4 text-light">
											<label className="form-label" htmlFor="form3Example4cg">Password</label>
											<input type="password" name="password" value={password} onChange={handlePassword} className="form-control" required />
										</div>
										<div className="form-outline mb-4 text-light">
											<label className="form-label" htmlFor="form3Example4cg">First Name</label>
											<input type="text" name="firstName" value={firstName} onChange={handleFirstName} className="form-control" required />
										</div>
										<div className="form-outline mb-4 text-light">
											<label className="form-label" htmlFor="form3Example4cg">Last Name</label>
											<input type="text" name="lastName" value={lastName} onChange={handleLastName} className="form-control" required />
										</div>
										<div className="form-outline mb-4 text-light">
											<label className="form-label" htmlFor="form3Example4cg"> Location</label>
											<input type="text" name="location" value={location} onChange={handleLocation} className="form-control" />
										</div>
										<div className="form-outline mb-4 text-light">
											<label className="form-label" htmlFor="form3Example4cg"> Birthdate</label>
											<input type="Date" name="birthdate" value={birthdate} onChange={handleBirthdate} className="form-control" />
										</div>
										<div className="d-flex justify-content-center">
											<button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
										</div>
									</form>
									<p className="text-center mt-5 mb-0 text-light">Already have an account? <Link href="/users/login"
										className="fw-bold text-body"><u>Login here</u></Link></p>
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