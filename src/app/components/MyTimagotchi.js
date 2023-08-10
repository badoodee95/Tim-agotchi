'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


export default function MyTimagotchi() {
    return (
        <div class="container d-flex justify-content-center align-items-center">
            <div class="card bg-image"> {/* background image goes here! style={{ backgroundImage: 'url(https://i.imgur.com/Qtrsrk5.jpg)' }} */}
                <div class="upper">
                    {/* <img src=" class=" img-fluid" /> */}
                </div>
                <div class="user text-center">
                    <div class="profile">
                        <img src="https://i.imgur.com/JgYD2nQ.jpg" class="rounded-circle" width="80" />
                    </div>
                </div>
                <div class="mt-5 text-center">
                    <h4 class="mb-0">Benjamin Tims</h4>
                    <span class="text-muted d-block mb-2">Los Angles</span>
                    <button class="btn btn-primary btn-sm follow">Follow</button>
                    <div class="d-flex justify-content-between align-items-center mt-4 px-4">
                        <div class="stats">
                            <h6 class="mb-0 mr-1">Health</h6>
                            <span>8,797</span>
                        </div>
                        <div class="stats">
                            <h6 class="mb-0">Hunger</h6>
                            <span>142</span>
                        </div>
                        <div class="stats">
                            <h6 class="mb-0">Mood</h6>
                            <span>129</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};;;;