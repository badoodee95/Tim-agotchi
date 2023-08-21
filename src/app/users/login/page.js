"use client";
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import setAuthToken from '@/app/utils/setAuthToken';
// import jwtDecode from 'jwt-decode';
import Link from 'next/link';
import styles from '@/app/login.module.css';

export default function Login() {
    const router = useRouter();
    const [redirect, setRedirect] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // at the beginning of a submit function

        axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/login`, { email, password })
            .then(response => {
                if (typeof window !== 'undefined') {
                    localStorage.setItem('jwtToken', response.data.token);
                    localStorage.setItem('email', response.data.userData.email);
                    localStorage.setItem('expiration', response.data.userData.exp);
                    localStorage.setItem('userId', response.data.userData.id);
                    setAuthToken(response.data.token);
                    // let decoded = jwtDecode(response.data.token);
                    const event = new Event('userLoggedIn');
                    window.dispatchEvent(event);
                    setRedirect(true);
                }
            })
            .catch(error => {
                console.log('===> Error in Login', error);
                setError(true);
            });
    };

    useEffect(() => {
        if (redirect) {
            router.push(`/users/profile/${localStorage.getItem('userId')}`);
        }
    }, [redirect, router]);

    if (error) {
        return (
            <>
                <title>tim-agotchi - Error</title>
                <section className="vh-100 bg-image"
                    style={{
                        backgroundImage: 'url(https://i.imgur.com/hZTsqdL.jpg)', backgroundSize: "cover", backgroundPosition: "center"
                    }}>
                    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                        <div className="container h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-12 col-md-9 col-lg-7 col-xl-7">
                                    <div className="card" style={{ borderRadius: "15px", backgroundColor: 'rgba(210, 91, 234, 0.5)' }}>
                                        <div className="card-body d-flex flex-wrap justify-content-center">
                                            <h2 className='text-nowrap' id={styles.title}>TIMAGOTCHI ACCOUNT NOT FOUND</h2>
                                            <a href="/users/login" type="button" className="btn btn-primary mt-3 mx-5" id={styles.buttons}>BACK TO LOGIN</a>
                                            <a href="/users/signup" type="button" className="btn btn-secondary mt-3 mx-5" id={styles.buttons}>SIGNUP</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </>
        );
    }

    return (
        <>
            <title>tim-agotchi - Login</title>
            <section className="vh-100 bg-image"
                style={{
                    backgroundImage: 'url(https://i.imgur.com/hZTsqdL.jpg)', backgroundSize: "cover", backgroundPosition: "center"
                }}>
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className={`${styles.loginCard}`} >
                                    <div className="card-body p-5">
                                        <h2 className="text-center mb-5 text-light" id={styles.title}>LOGIN TO TIMAGOTCHI</h2>

                                        <form onSubmit={handleSubmit}>
                                            <div className="form-outline mb-4 text-light">
                                                <input type="text" id="form3Example1cg" className="form-control form-control-lg" value={email} onChange={handleEmail} />
                                                <label className="form-label" htmlFor="form3Example1cg" id={styles.title}>EMAIL</label>
                                            </div>
                                            <div className="form-outline mb-4 text-light">
                                                <input type="password" id="form3Example3cg" className="form-control form-control-lg" value={password} onChange={handlePassword} />
                                                <label className="form-label" htmlFor="form3Example3cg" id={styles.title}>PASSWORD</label>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button type="submit"
                                                    className="btn btn-block btn-lg text-body" id={styles.buttons}>LOGIN</button>
                                            </div>
                                        </form>
                                        <p className="text-center mt-5 mb-0 " id={styles.title}> NO ACCOUNT? <Link href="/users/signup"
                                            className="fw-bold text-body" id={styles.title}><u>SIGN UP HERE</u></Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}