'use client';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import styles from '../profile.module.css';
import { useRouter } from 'next/navigation';

export default function Timagotchi({ timagotchi }) {
    const [userId, setUserId] = useState('');
    const router = useRouter();
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setUserId(localStorage.getItem('userId'));
        }
    }, []);

    const roundedFood = Math.round(timagotchi.food.value);
    const roundedMood = Math.round(timagotchi.mood.value);
    const roundedFriendship = Math.round(timagotchi.friendship.value);
    const roundedCleanliness = Math.round(timagotchi.cleanliness.value);

    const [timFood, setTimFood] = useState(roundedFood);
    const [timMood, setTimMood] = useState(roundedMood);
    const [timFriend, setTimFriend] = useState(roundedFriendship);
    const [timClean, setTimClean] = useState(roundedCleanliness);
    const [timPoop, setTimPoop] = useState(timagotchi.hasPooped);

    let feedButton;
    let playButton;
    let cleanButton;

    if (timagotchi.food.status === 'HUNGRY') {
        feedButton = <button className="btn btn-success mx-1" onClick={handleFeed}>Feed</button>;
    } else {
        feedButton = <button className="btn btn-secondary mx-1 disabled">Feed</button>;
    }

    if (timagotchi.mood.status === 'BORED') {
        playButton = <button className="btn btn-success mx-1" onClick={handlePlay}>Play</button>;
    } else {
        playButton = <button className="btn btn-secondary mx-1 disabled">Play</button>;
    }

    if (timagotchi.cleanliness.status === 'CLEAN') {
        cleanButton = <button className="btn btn-secondary mx-1 disabled">Clean</button>;
    } else {
        cleanButton = <button className="btn btn-success mx-1" onClick={handleClean}>Clean</button>;
    }

    if (timagotchi.alive === false) {
        feedButton = <button className="btn btn-secondary mx-1 disabled">Feed</button>;
        playButton = <button className="btn btn-secondary mx-1 disabled">Play</button>;
        cleanButton = <button className="btn btn-secondary mx-1 disabled">Clean</button>;
    }

    const [hungry, setHungry] = useState(feedButton);
    const [bored, setBored] = useState(playButton);
    const [clean, setClean] = useState(cleanButton);

    function handleFeed() {
        axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/timagotchis/feed/${timagotchi.user[0]}/${timagotchi._id}`)
            .then(response => {
                setTimFood(response.data.timagotchi.food.value);
                setTimFriend(response.data.timagotchi.friendship.value);
                setHungry(<button className="btn btn-secondary mx-1 disabled">Feed</button>);
            })
            .catch(error => {
                console.log('Error updating timagotchi', error);
            });
    }

    function handlePlay() {
        axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/timagotchis/play/${timagotchi.user[0]}/${timagotchi._id}`)
            .then(response => {
                setTimMood(response.data.timagotchi.mood.value);
                setTimFriend(response.data.timagotchi.friendship.value);
                setBored(<button className="btn btn-secondary mx-1 disabled">Play</button>);
            })
            .catch(error => {
                console.log('Error updating timagotchi', error);
            });
    }

    function handleClean() {
        axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/timagotchis/clean/${timagotchi.user[0]}/${timagotchi._id}`)
            .then(response => {
                setTimClean(response.data.timagotchi.cleanliness.value);
                setTimFriend(response.data.timagotchi.friendship.value);
                if (response.data.timagotchi.cleanliness.value === 100) {
                    setClean(<button className="btn btn-secondary mx-1 disabled">Clean</button>);
                }
            })
            .catch(error => {
                console.log('Error updating timagotchi', error);
            });
    }

    function handlePoop() {
        axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/timagotchis/pooperscooper/${timagotchi.user[0]}/${timagotchi._id}`)
            .then(response => {
                setTimPoop(response.data.timagotchi.hasPooped);
            })
            .catch(error => {
                console.log('Error updating timagotchi', error);
            });
    }

    function handleRelease() {
        if (timagotchi.alive === false) {
            alert('You cannot release a dead timagotchi!');
        } else {
            if (confirm(`Are you sure you want to release ${timagotchi.name}?`)) {
                let gender;
                if (timagotchi.gender === 'male') {
                    gender = 'he';
                } else {
                    gender = 'she';
                }
                if (confirm(`Are you really sure? Once you release ${timagotchi.name}, ${gender}'s gone forever!!`)) {
                    axios.delete(`${process.env.NEXT_PUBLIC_SERVER_URL}/timagotchis/${timagotchi._id}`)
                        .then(response => {
                            alert(`${timagotchi.name} has been released to the wild!`);
                            router.push(`/users/profile/${userId}`);
                        })
                        .catch(error => {
                            console.log('Error updating timagotchi', error);
                        });
                }
            }
        }
    }

    let ageElement;

    if (timagotchi.age = 1) {
        ageElement = <p ><span className='fontChange'>AGE:</span><span> {timagotchi.age}</span><span className='fontChange'> DAY</span></p>;
    } else {
        ageElement = <p className='fontChange'>AGE: {timagotchi.age} DAYS</p>;
    }

    return (
        <>
            <title>tim-agotchi</title>
            <div id={styles.backgroundTimagotchiImage}>
                <div className="card" id={styles.timCard} >
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-12 text-center">
                            <h2 className='fontChange'>{timagotchi.name.toUpperCase()}</h2>
                            {ageElement}
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-9 text-center">
                            <div className='d-flex justify-content-center'>
                                <img src={timagotchi.image} alt="Timagotchi" className="img-fluid" />
                                {timPoop && timagotchi.user[0] === userId ?
                                    <div style={{ marginTop: '76%' }}>
                                        <a onClick={handlePoop} className={styles.timPoop}>
                                            <img src='https://i.imgur.com/Z4pfFD7.png' alt='Timagotchi poop' className='animate__animated animate__bounce animate__infinite' />
                                        </a>
                                    </div>
                                    : timPoop && timagotchi.user[0] !== userId ?
                                        <div style={{ marginTop: '76%' }}>
                                            <img src='https://i.imgur.com/Z4pfFD7.png' alt='Timagotchi poop' className='animate__animated animate__bounce animate__infinite' />
                                        </div>
                                        : null
                                }
                            </div>
                            <div className='progress-container mt-2' style={{ maxWidth: '90%', margin: 'auto' }}>
                                <div className="progress-label fontChange">HUNGER</div>
                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar bg-info"
                                        style={{ width: `${timFood}%` }}
                                    >
                                        {Math.round(timFood)}%
                                    </div>
                                </div>
                                <div className="progress-label fontChange">MOOD</div>
                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar bg-info"
                                        style={{ width: `${timMood}%` }}
                                    >
                                        {Math.round(timMood)}%
                                    </div>
                                </div>
                                <div className="progress-label fontChange">CLEANLINESS</div>
                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar bg-info"
                                        style={{ width: `${timClean}%` }}
                                    >
                                        {Math.round(timClean)}%
                                    </div>
                                </div>
                                <div className="progress-label fontChange">FRIENDSHIP</div>
                                <div className="progress mb-3">
                                    <div
                                        className="progress-bar bg-info"
                                        style={{ width: `${timFriend}%` }}
                                    >
                                        {Math.round(timFriend)}%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {timagotchi.user[0] === userId &&
                    <>
                        <div className="d-flex justify-content-center mt-3">
                            {hungry}
                            {bored}
                            {clean}
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <button onClick={handleRelease} className="btn btn-danger mx-1">Release</button>
                        </div>
                        <br />
                        <br />
                    </>
                }
            </div>
        </>
    );
};