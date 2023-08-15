'use client';
import styles from '@/app/signup.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function NewTimagotchi() {

    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [type, setType] = useState('');
    const [tim, setTim] = useState('');
    const [error, setError] = useState(false);

    const [redirect, setRedirect] = useState(false);
    const router = useRouter();

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleGender = (e) => {
        setGender(e.target.value);
    };

    const handleType = (e) => {
        setType(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTim = { name, gender, type, user: localStorage.getItem('userId') };
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/timagotchis/new`, newTim)
            .then(response => {
                console.log('response', response.data);
                setTim(response.data.timagotchi);

                setRedirect(true);
            })
            .catch(error => {
                if (error.response.data.message === 'Email already exists') {
                    console.log('===> Error in Signup', error.response.data.message);
                    // setError(true);
                }
            });
    };



    if (redirect) { router.push(`/users/${tim._id}`); }


    return (
        <section className="vh-100 bg-image"
            style={{ backgroundImage: "url('https://i.imgur.com/DXW6iL3.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: "15px", backgroundColor: 'rgba(210, 91, 234, 0.9)' }}>
                                <div className="card-body p-5">
                                    <h2 className={`text-center mb-5 text-light ${styles.filledInText}`}>CREATE A NEW TIMAGOTCHI</h2>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-outline mb-4 text-light text-center">
                                            <input type="text" id="form3Example1cg" className={`form-control form-control-lg ${styles.filledInText}`} onChange={handleName} placeholder='NAME' />
                                        </div>
                                        <div className="form-outline mb-4 text-light text-center">
                                            <select className={`form-control form-control-lg ${styles.filledInText}`} onChange={handleGender}>
                                                <option value="gender" defaultValue>CHOOSE A GENDER</option>
                                                <option value="male">MALE</option>
                                                <option value="female">FEMALE</option>
                                            </select>
                                        </div>
                                        <div className="form-outline mb-4 text-light text-center">
                                            <select className={`form-control form-control-lg ${styles.filledInText}`} onChange={handleType}>
                                                <option value="type" defaultValue>CHOOSE A TYPE</option>
                                                <option value="Dog">DOG</option>
                                                <option value="Cat">CAT</option>
                                            </select>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button type="submit" className="btn btn-black btn-block btn-lg gradient-custom-4 text-body" id={styles.buttonText}>CREATE</button>
                                        </div>
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