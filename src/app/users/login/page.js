"use client";
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import setAuthToken from '@/app/utils/setAuthToken';
import jwtDecode from 'jwt-decode';
import Link from 'next/link';


export default function Login() {
    const router = useRouter();
    const [redirect, setRedirect] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleEmail = (e) => {
        // fill in code
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        // fill in code
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // at the beginning of a submit function

        axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/login`, { email, password })
            .then(response => {
                console.log('response', response.data);
                if (typeof window !== 'undefined') {
                    localStorage.setItem('jwtToken', response.data.token);
                    localStorage.setItem('email', response.data.userData.email);
                    localStorage.setItem('expiration', response.data.userData.exp);
                    localStorage.setItem('userId', response.data.userData.id);
                    setAuthToken(response.data.token);
                    let decoded = jwtDecode(response.data.token);
                    setRedirect(true);
                }
            })
            .catch(error => {
                if (error.response.data.message === 'User not found') {
                    console.log('===> Error in Login', error.response.data.message);
                    setError(true);
                }
            });

    };
    useEffect(() => {
        if (redirect) { router.push('/users/profile-test'); }
    }, [redirect, router]);
    if (error) {
        return (
            <div>
                <div className="card text-white bg-primary py-5 d-md-down-none" style={{ width: "44%" }}>
                    <div className="card-body text-center">
                        <div>
                            <p>User not found</p>
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

    return (
        <section className="vh-100 bg-image"
            style={{
                backgroundImage: 'url(https://img.freepik.com/free-vector/animal-background-vector-with-cute-pets-illustration_53876-127698.jpg?w=2000&t=st=1691638487~exp=1691639087~hmac=5a0abcbd75513444612e84859d0bbf0222fbfe9af88e338b667d7dd943c8e012)', backgroundSize: "cover", backgroundPosition: "center"
            }}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: "15px", backgroundColor: 'rgba(210, 91, 234, 0.5)' }}>
                                <div className="card-body p-5">
                                    <h2 className="text-center mb-5 text-light">Login to Timagotchi</h2>

                                    <form onSubmit={handleSubmit}>
                                        <div className="form-outline mb-4 text-light">
                                            <input type="text" id="form3Example1cg" className="form-control form-control-lg" value={email} onChange={handleEmail} />
                                            <label className="form-label" htmlFor="form3Example1cg">Email</label>
                                        </div>
                                        <div className="form-outline mb-4 text-light">
                                            <input type="password" id="form3Example3cg" className="form-control form-control-lg" value={password} onChange={handlePassword} />
                                            <label className="form-label" htmlFor="form3Example3cg">Password</label>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button type="submit"
                                                className="btn btn- btn-block btn-lg gradient-custom-4 text-body">Login</button>
                                        </div>
                                    </form>
                                    <p className="text-center mt-5 mb-0 "> No Account? <Link href="/users/signup"
                                        className="fw-bold text-body"><u>Sign Up here</u></Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}