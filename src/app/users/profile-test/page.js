'use client';
import MyTimagotchiList from '@/app/components/MyTimagotchisList';
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import EditModal from '@/app/components/EditModal';
import styles from '@/app/profile.module.css';

export default function ProfileTest() {

    return (
        <>
            {/* <section className='vh-100 bg-image' style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/animal-background-with-cute-pets-illustration_53876-111987.jpg?w=2000&t=st=1691698837~exp=1691699437~hmac=761e22792f0828ae53444c21bd0406f9b83f5490606f90345dbc4c98e7dae30f)', backgroundSize: 'cover', }}> */}
            <section className='vh-100 bg-image' id={styles.backgroundImage} style={{ overflowX: 'hidden', overflowY: 'auto' }}>
                <div class="container">
                    <div class="main-body" >
                        <div class="row gutters-sm">
                            {/* <div class="col-md-2 mb-3"> */}
                            <div class="col-lg-2 mb-2">
                                <div class="card mt-4" id={styles.profileBorder} >
                                    <div class="card-body" id='profileImagePlacement'>
                                        <div class="d-flex flex-column align-items-center text-center">
                                            <img id={styles.profileImage} src="https://ca.slack-edge.com/T0351JZQ0-U04NEAZUL3T-20e13f3e4c10-512" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-4">
                                    <div class="col-sm-12 d-flex justify-content-center">
                                        <div class="col-sm-12 d-flex justify-content-center me-3">
                                            <EditModal />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8 mt-4">
                                <div class="mt-2">
                                </div>
                                <div class="card mb-3" id={styles.profileInfoBorder}>
                                    <div class="card-body">
                                        <div class="row gx-3 mb-3">
                                            <div class="col-md-6">
                                                <h6 class="mb-0" id={styles.firstNameTitle}>FIRST NAME</h6>
                                                <div class="mb-1 pt-2 text-secondary" id={styles.firstName}>VALERIE</div>
                                            </div>
                                            <div class="col-md-6">
                                                <h6 class="mb-0" id={styles.lastNameTitle}>LAST NAME</h6>
                                                <div class="mb-1 pt-2 text-secondary" id={styles.lastName}>LUNA</div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0" id={styles.emailTitle}>EMAIL</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary" id={styles.email}>
                                                VALERIE.LUNA@MAIL.COM
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <MyTimagotchiList />
                </div>
            </section >
        </>
    );
};