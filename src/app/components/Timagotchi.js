import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Timagotchi({ timagotchi }) {

    const router = useRouter();

    const roundedFood = Math.round(timagotchi.food.value);
    const roundedMood = Math.round(timagotchi.mood.value);
    const roundedFriendship = Math.round(timagotchi.friendship.value);

    let feedButton;
    let playButton;

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



    function handleFeed() {
        axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/timagotchis/feed/64d46540530ee66922af7239/${timagotchi._id}`)
            .then(response => {
                console.log('response data', response.data.message);
            })
            .catch(error => {
                console.log('Error updating timagotchi', error);
            });

        router.refresh();
    }

    function handlePlay() {
        axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/timagotchis/play/64d46540530ee66922af7239/${timagotchi._id}`)
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
                        <h2>{timagotchi.name}</h2>
                        <p>Age: {timagotchi.age} Days</p>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-9 text-center">
                        <img src={timagotchi.image} alt="Timagotchi" className="img-fluid" />
                        <div className='progress-container' style={{ maxWidth: '90%', margin: 'auto' }}>
                            <div className="progress-label">Hunger:</div>
                            <div className="progress mb-3">
                                <div
                                    className="progress-bar bg-info"
                                    style={{ width: `${roundedFood}%` }}
                                >
                                    {roundedFood}%
                                </div>
                            </div>
                            <div className="progress-label">Mood:</div>
                            <div className="progress mb-3">
                                <div
                                    className="progress-bar bg-info"
                                    style={{ width: `${roundedMood}%` }}
                                >
                                    {roundedMood}%
                                </div>
                            </div>
                            <div className="progress-label">Friendship:</div>
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
            <div className="d-flex justify-content-center mt-3">
                {feedButton}
                {playButton}

            </div>
        </div>
    );
};