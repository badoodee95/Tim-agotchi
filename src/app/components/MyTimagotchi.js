'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '@/app/MyTimagotchi.module.css';
import Link from 'next/link';

export default function MyTimagotchi({ Timagotchi }) {
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="card bg-image mb-5" id={styles.cardShadow}>
                <br />

                <div className="user text-center">
                    <div className="profile">

                        <Link href={`/users/${Timagotchi._id}`} ><img src={Timagotchi.image} width="150" height="150" /></Link>
                        {Timagotchi.hasPooped &&
                            <img style={{ marginTop: '20%' }} src="https://www.pngfind.com/pngs/b/42-427701_exclamation-point-png.png" width="20" height="50" />}
                    </div>
                </div>
                <div className="mt-3 text-center" id={styles.text}>
                    <h5>{Timagotchi.name.toUpperCase()}</h5>
                    <div className="d-flex mt-5 px-5">
                        <div className="stats mx-2">
                            <h6 className="mb-0 underlined" >FRIENDSHIP</h6>
                            <span>{Timagotchi.friendship.status.toUpperCase()}</span>
                        </div>
                        <div className="stats mx-2">
                            <h6 className="mb-0 underlined">FOOD</h6>
                            <span>{Timagotchi.food.status.toUpperCase()}</span>
                        </div>
                        <div className="stats mx-2">
                            <h6 className="mb-0 underlined">MOOD</h6>
                            <span>{Timagotchi.mood.status.toUpperCase()}</span>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        </div >
    );
};
