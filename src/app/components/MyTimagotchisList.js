'use client';
import MyTimagotchi from "./MyTimagotchi";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import jwtDecode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { LoadingLine } from "./Loading";
import Expiration from "./Expiration";
import axios from "axios";
import Link from "next/link";

export default function MyTimagotchiList({ currentUser }) {
    const [loggedInUserId, setLoggedInUserId] = useState(null);
    const [tims, setTims] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        setAuthToken(localStorage.getItem('jwtToken'));
        if (localStorage.getItem('jwtToken')) {
            axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/users`)
                .then((response) => {
                    let userData = jwtDecode(localStorage.getItem('jwtToken'));
                    console.log('userData', userData);
                    if (userData.email === localStorage.getItem('email')) {
                        setLoggedInUserId(localStorage.getItem('userId'));
                        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/timagotchis/my-timagotchis/${currentUser._id}`)
                            .then((response) => {
                                setIsLoading(false);
                                setTims(response.data);
                            })
                            .catch((error) => {
                                console.log(error);
                            });
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
    }, [router, currentUser]);

    let rows = [];
    if (tims.length === 0) {
        rows.push(<div >
            <br />
            <br />
            <h4 className='underlined'>NO TIMAGOTCHIS YET</h4>
            {currentUser._id === loggedInUserId &&
                <h4 className='underlined'>CLICK <Link href='/users/new-timagotchi'>HERE</Link> TO CREATE ONE</h4>
            }
        </div>);
    } else {
        tims.forEach((timagotchi) => {
            rows.push(<MyTimagotchi Timagotchi={timagotchi} key={timagotchi._id} />);
        });
    }

    if (isLoading) return <LoadingLine />;

    return (
        <section>
            <div className="d-flex justify-content-center" >
                {currentUser._id === loggedInUserId ?
                    <h1 className='underlined'>MY TIMAGOTCHIS</h1>
                    :
                    <h1 className='underlined'>{currentUser.firstName.toUpperCase()}&apos;s TIMAGOTCHIS</h1>
                }
            </div>
            <div className='container'>
                <div className='row row-cols-auto' style={{ justifyContent: 'center' }}>
                    {rows}

                </div>
            </div>
        </section>
    );
};