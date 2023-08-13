'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '@/app/MyTimagotchi.module.css';
import Link from 'next/link';


export default function MyTimagotchi({ Timagotchi }) {

    return (

        <div className="container d-flex justify-content-center align-items-center">
            <div className="card bg-image mb-5" id={styles.cardShadow}> {/* background image goes here! style={{ backgroundImage: 'url(https://i.imgur.com/Qtrsrk5.jpg)' }} */}
                <br />
                <div className="user text-center">
                    <div className="profile">
                        <Link href={`/users/${Timagotchi._id}`} ><img src={Timagotchi.image} className="rounded-circle" width="150" height="150" /></Link>
                    </div>
                </div>
                <div className="mt-5 text-center" id={styles.text}>
                    <h5>{Timagotchi.name}</h5>
                    <div className="d-flex mt-5 px-5">
                        <div className="stats mx-2">
                            <h6 className="mb-0">FRIENDSHIP</h6>
                            <span>{Timagotchi.friendship.status.toUpperCase()}</span>
                        </div>
                        <div className="stats mx-2">
                            <h6 className="mb-0">FOOD</h6>
                            <span>{Timagotchi.food.status.toUpperCase()}</span>
                        </div>
                        <div className="stats mx-2">
                            <h6 className="mb-0">MOOD</h6>
                            <span>{Timagotchi.mood.status.toUpperCase()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
}; ``;
