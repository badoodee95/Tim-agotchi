'use client';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import styles from '../profile.module.css';
import Image from 'next/image';
import Router from 'next/router';

export default function Timagotchi({ timagotchi }) {

    const router = useRouter();

    let userId;

    if (typeof window !== 'undefined') {
        userId = localStorage.getItem('userId');
    }

    const roundedFood = Math.round(timagotchi.food.value);
    const roundedMood = Math.round(timagotchi.mood.value);
    const roundedFriendship = Math.round(timagotchi.friendship.value);
    const roundedCleanliness = Math.round(timagotchi.cleanliness.value);

    let feedButton;
    let playButton;
    let cleanButton;

    if (timagotchi.food.status === 'Hungry') {
        feedButton = <button className="btn btn-success mx-1" onClick={handleFeed}>Feed</button>;
    } else {
        feedButton = <button className="btn btn-secondary mx-1 disabled">Feed</button>;
    }

    if (timagotchi.mood.status === 'Bored') {
        playButton = <button className="btn btn-success mx-1" onClick={handlePlay}>Play</button>;
    } else {
        playButton = <button className="btn btn-secondary mx-1 disabled">Play</button>;
    }

    if (timagotchi.cleanliness.status === 'Clean') {
        cleanButton = <button className="btn btn-secondary mx-1 disabled">Clean</button>;
    } else {
        cleanButton = <button className="btn btn-success mx-1" onClick={handleClean}>Clean</button>;
    }

    if (timagotchi.cleanliness.status === 'Clean') {
        cleanButton = <button className="btn btn-secondary mx-1 disabled">Clean</button>;
    } else {
        cleanButton = <button className="btn btn-success mx-1" onClick={handleClean}>Clean</button>;
    }



    function handleFeed() {
        axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/timagotchis/feed/${userId}/${timagotchi._id}`)
            .then(response => {
                console.log('response data', response.data.message);
            })
            .catch(error => {
                console.log('Error updating timagotchi', error);
            });

        router.refresh();

    }

    function handlePlay() {
        axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/timagotchis/play/${userId}/${timagotchi._id}`)
            .then(response => {
                console.log('response data', response.data.message);
            })
            .catch(error => {
                console.log('Error updating timagotchi', error);
            });

        router.refresh();
    }

    function handleClean() {
        axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/timagotchis/clean/${userId}/${timagotchi._id}`)
            .then(response => {
                console.log('response data', response.data.message);
            })
            .catch(error => {
                console.log('Error updating timagotchi', error);
            });

        router.refresh();
    }

    function handlePoop() {
        axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/timagotchis/pooperscooper/${userId}/${timagotchi._id}`)
            .then(response => {
                console.log('response data', response.data.message);
            })
            .catch(error => {
                console.log('Error updating timagotchi', error);
            });

        router.refresh();
    }

    return (
        <div style={{ marginTop: '8%' }}>
            <div className="card" style={{ maxWidth: '35%', margin: 'auto' }}>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-12 text-center">
                        <h2 className='fontChange'>{timagotchi.name}</h2>
                        <p className='fontChange'>AGE: {timagotchi.age} DAYS</p>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-9 text-center">
                        <div className='d-flex justify-content-center'>
                            <img src={timagotchi.image} alt="Timagotchi" className="img-fluid" />
                            {timagotchi.hasPoooped && timagotchi._id === userId &&
                                <div style={{ marginTop: '76%' }}>
                                    <a onClick={handlePoop} style={{ cursor: 'pointer' }}>
                                        <img src='https://i.imgur.com/Z4pfFD7.png' alt='Timagotchi poop' className='' />
                                    </a>
                                </div>
                            }
                        </div>
                        <div className='progress-container mt-2' style={{ maxWidth: '90%', margin: 'auto' }}>
                            <div className="progress-label fontChange">HUNGER</div>
                            <div className="progress mb-3">
                                <div
                                    className="progress-bar bg-info"
                                    style={{ width: `${roundedFood}%` }}
                                >
                                    {roundedFood}%
                                </div>
                            </div>
                            <div className="progress-label fontChange">MOOD</div>
                            <div className="progress mb-3">
                                <div
                                    className="progress-bar bg-info"
                                    style={{ width: `${roundedMood}%` }}
                                >
                                    {roundedMood}%
                                </div>
                            </div>
                            <div className="progress-label fontChange">CLEANLINESS</div>
                            <div className="progress mb-3">
                                <div
                                    className="progress-bar bg-info"
                                    style={{ width: `${roundedCleanliness}%` }}
                                >
                                    {roundedCleanliness}%
                                </div>
                            </div>
                            <div className="progress-label fontChange">FRIENDSHIP</div>
                            <div className="progress mb-3">
                                <div
                                    className="progress-bar bg-info"
                                    style={{ width: `${roundedFriendship}%` }}
                                >
                                    {roundedFriendship}%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {timagotchi._id === userId &&
                <div className="d-flex justify-content-center mt-3">
                    {feedButton}
                    {playButton}
                    {cleanButton}
                </div>
            }
        </div>
    );
};