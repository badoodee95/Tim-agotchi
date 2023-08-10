import React from 'react';
import ActionButton from './ActionButton';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Timagotchi({ name, age, hunger, mood, friendship }) {
    return (
        <div style={{marginTop: '7%'}}>
            <div className="card" style={{ maxWidth: '35%', margin: 'auto' }}>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-12 text-center">
                        <h2>{name}</h2>
                        <p>Age: {age} Days</p>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-9 text-center">
                        <img src="https://i.imgur.com/gNySDzV.png" alt="Timagotchi" className="img-fluid" />
                        <div className='progress-container' style={{ maxWidth: '50%', margin: 'auto' }}>
                            <div className="progress-label">Hunger:</div>
                            <div className="progress mb-3">
                                <div
                                    className="progress-bar"
                                    style={{ width: `${hunger}%` }}
                                >
                                    {hunger}%
                                </div>
                            </div>
                            <div className="progress-label">Mood:</div>
                            <div className="progress mb-3">
                                <div
                                    className="progress-bar"
                                    style={{ width: `${mood}%` }}
                                >
                                    {mood}%
                                </div>
                            </div>
                            <div className="progress-label">Friendship:</div>
                            <div className="progress mb-3">
                                <div
                                    className="progress-bar"
                                    style={{ width: `${friendship}%` }}
                                >
                                    {friendship}%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-3">
                <button className="btn btn-success mx-1">Feed</button>
                <button className="btn btn-success mx-1">Play</button>
            </div>
        </div>
    );
};