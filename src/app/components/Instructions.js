'use client';
import React, { useEffect, useState } from 'react';
import styles from '@/app/Instructions.module.css';

export default function Instructions() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-center" id={styles.text}>WELCOME TO <br /> TIM-AGOTCHI!</h2>
                    <p className="text-center" id={styles.text}>TIM-AGOTCHI IS A VIRTUAL PET GAME WHERE YOU CAN CREATE YOUR OWN TIM-AGOTCHI AND TAKE CARE OF IT. YOU CAN FEED IT, PLAY WITH IT, AND EVEN CLEAN UP AFTER IT! YOU CAN ALSO VISIT OTHER USERS AND SEE THEIR <br /> TIM-AGOTCHIS.</p>
                    <hr />
                </div>
            </div>
        </div>

    );
}