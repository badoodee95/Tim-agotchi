"use client";
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import setAuthToken from '@/app/utils/setAuthToken';
import jwtDecode from 'jwt-decode';


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

                localStorage.setItem('jwtToken', response.data.token);
                localStorage.setItem('email', response.data.userData.email);
                localStorage.setItem('expiration', response.data.userData.exp);
                setAuthToken(response.data.token);
                let decoded = jwtDecode(response.data.token);
                setRedirect(true);
            })
            .catch(error => {
                if (error.response.data.message === 'Email already exists') {
                    console.log('===> Error in Signup', error.response.data.message);
                    setError(true);
                }
            });

    };

    if (redirect) { router.push('/users/profile'); }
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

    return (
        <section className="vh-100 bg-image"
            // style={{
            //     backgroundImage: 'url(https://img.freepik.com/free-vector/frame-with-dogs-vector-white-background_53876-127700.jpg?w=2000)', backgroundSize: "cover", backgroundPosition: "center"
            // }}>
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

                                    <form>

                                        <div className="form-outline mb-4 text-light">
                                            <input type="text" id="form3Example1cg" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="form3Example1cg">Email</label>
                                        </div>

                                        <div className="form-outline mb-4 text-light">
                                            <input type="email" id="form3Example3cg" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="form3Example3cg">Password</label>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <button type="button"
                                                className="btn btn- btn-block btn-lg gradient-custom-4 text-body">Login</button>
                                        </div>

                                        <p className="text-center mt-5 mb-0 ">Already have an account? <a href="/users/login"
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
}