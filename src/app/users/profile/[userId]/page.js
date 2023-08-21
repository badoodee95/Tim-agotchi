'use client';
import MyTimagotchiList from '@/app/components/MyTimagotchisList';
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect, use } from 'react';
import { useParams, useRouter } from 'next/navigation';
import EditModal from '@/app/components/EditModal';
import styles from '@/app/profile.module.css';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthToken from '@/app/utils/setAuthToken';
import { LoadingCircle, LoadingLine } from '@/app/components/Loading';
import Expiration from '@/app/components/Expiration';

export default function ProfileTest() {
    const [authUserId, setAuthUserId] = useState('');
    const { userId } = useParams();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const reload = () => {
        window.location.reload();
    };

    // <Expiration />;

    useEffect(() => {
        setAuthToken(localStorage.getItem('jwtToken'));
        if (localStorage.getItem('jwtToken')) {
            axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/users`)
                .then((response) => {
                    let userData = jwtDecode(localStorage.getItem('jwtToken'));
                    if (userData.email === localStorage.getItem('email')) {
                        const fetchUserData = async () => {
                            try {
                                const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/${userId}`);
                                setUser(response.data.user);
                                setIsLoading(false);
                            } catch (error) {
                                console.log('Error fetching user data', error);
                            }
                        };

                        fetchUserData();

                        if (typeof window !== 'undefined') {
                            setAuthUserId(localStorage.getItem('userId'));
                        }
                    } else {
                        router.push('/users/login');
                    }
                })
                .catch((error) => {
                    console.log(error);
                    router.push('/users/login');
                });
        } else {
            router.push('/users/login');
        }
    }, [router, userId]);

    if (authUserId === null) {
        router.push('/users/login');
    }

    if (isLoading) return (<LoadingCircle />);

    return (
        <>
            <title>tim-agotchi - Profile</title>
            <section className='vh-100 bg-image' id={styles.backgroundProfileImage} style={{ overflowX: 'hidden', overflowY: 'auto' }}>
                <div className="container" style={{ marginTop: '60px' }}>
                    <div className="main-body" >
                        <div className="row gutters-sm" style={{ justifyContent: 'center' }}>
                            <div className="col-lg-2 mb-2">
                                <div className="card mt-4" id={styles.profileBorder} >
                                    <div className="card-body" id={styles.profileImagePlacement}>
                                        <div className="d-flex flex-column align-items-center text-center">
                                            <img id={styles.profileImage} src={user.avatar || "https://ca.slack-edge.com/T0351JZQ0-U04NEAZUL3T-20e13f3e4c10-512"} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-sm-12 d-flex justify-content-center">
                                        <div className="col-sm-12 d-flex justify-content-center me-3">
                                            <EditModal user={user} reload={reload} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 mt-4">
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
                <br />
                <div>
                    <MyTimagotchiList currentUser={user} />
                </div>
            </section >
        </>
    );
};