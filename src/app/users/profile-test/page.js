'use client';
import MyTimagotchiList from '@/app/components/MyTimagotchisList';
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';

export default function ProfileTest() {

    return (
        <>
            <section className='vh-100 bg-image' style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/animal-background-with-cute-pets-illustration_53876-111987.jpg?w=2000&t=st=1691698837~exp=1691699437~hmac=761e22792f0828ae53444c21bd0406f9b83f5490606f90345dbc4c98e7dae30f)', backgroundSize: 'cover', }}>
                <div class="container">
                    <div class="main-body">
                        <div class="row gutters-sm">
                            {/* <div class="col-md-2 mb-3"> */}
                            <div class="col-lg-2 mb-3">
                                <div class="card mt-4">
                                    <div class="card-body">
                                        <div class="d-flex flex-column align-items-center text-center">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150" />
                                            <div class="mt-3">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-4">
                                    <div class="col-sm-12 d-flex justify-content-center">
                                        <a class="btn btn-warning w-50" target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-8 mt-4">
                                <div class="card mb-3">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Name</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                Kenneth Valdez
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h6 class="mb-0">Email</h6>
                                            </div>
                                            <div class="col-sm-9 text-secondary">
                                                fip@jukmuh.al
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div >
                <div>
                    <MyTimagotchiList />
                </div>
            </section >
        </>
    );
};