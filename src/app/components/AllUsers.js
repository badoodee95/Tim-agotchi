'use client';

import styles from '@/app/profile.module.css';
import Link from 'next/link';

export default function AllUsers({ user }) {


    return (

        <div className="container">
            <div className="main-body" >
                <div className="row gutters-sm" style={{ justifyContent: 'center', display: 'flex' }}>
                    {/* <div className="col-md-2 mb-3"> */}
                    <div style={{ display: 'contents' }}>
                        <div className="card mt-4pus" id={styles.profileBorder} >
                            <div className="card-body" id='profileImagePlacement' style={{ display: 'flex', flexWrap: 'wrap', alignContent: 'center' }}>
                                <div className="d-flex flex-column align-items-center text-center">
                                    <Link href={`/users/profile-test/${user._id}`}> <img id={styles.profileImage} src={user.avatar || 'https://i.imgur.com/V3oECuL.png'} /></Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div >
                        <div className="mt-2">
                        </div>
                        <div className="card mb-3" id={styles.profileInfoBorder}>
                            <div className="card-body">
                                <div className="row gx-3 mb-3">
                                    <div className="col-md-6">
                                        <h6 className="mb-0" id={styles.firstNameTitle}>FIRST NAME</h6>
                                        <div className="mb-1 pt-2 text-secondary" id={styles.firstName}>{user.firstName}</div>
                                    </div>
                                    <div className="col-md-6">
                                        <h6 className="mb-0" id={styles.lastNameTitle}>LAST NAME</h6>
                                        <div className="mb-1 pt-2 text-secondary" id={styles.lastName}>{user.lastName}</div>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0" id={styles.emailTitle}>EMAIL</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary" id={styles.email}>
                                        {user.email}
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}