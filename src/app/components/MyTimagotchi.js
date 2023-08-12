'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '@/app/MyTimagotchi.module.css';


export default function MyTimagotchi({ Timagotchi }) {

    return (
        <div class="container d-flex justify-content-center align-items-center">
            <div class="card bg-image mb-5" id={styles.cardShadow}> {/* background image goes here! style={{ backgroundImage: 'url(https://i.imgur.com/Qtrsrk5.jpg)' }} */}
                <div class="upper">
                    {/* <img src=" class=" img-fluid" /> */}
                </div>
                <div class="user text-center">
                    <div class="profile">
                        <img src="https://img.freepik.com/free-vector/cute-cat-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4148.jpg?w=1480&t=st=1691779768~exp=1691780368~hmac=e4c89ce34c163874f0eb8dfa4a48ae9ed061a4fcb8534d9c580feec7f7d2d006" class="rounded-circle" width="150" height="150" />
                    </div>
                </div>
                <div class="mt-5 text-center" id={styles.text}>
                    <h5>CHICHARRÓN THE CAT</h5>
                    <div class="d-flex mt-5 px-5">
                        <div class="stats mx-2">
                            <h6 class="mb-0">HEALTH</h6>
                            <span>8,797</span>
                        </div>
                        <div class="stats mx-2">
                            <h6 class="mb-0">HUNGER</h6>
                            <span>142</span>
                        </div>
                        <div class="stats mx-2">
                            <h6 class="mb-0">MOOD</h6>
                            <span>129</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}; ``;
