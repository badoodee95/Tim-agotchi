'use client';
import MyTimagotchi from "./MyTimagotchi";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import jwtDecode from "jwt-decode";
import axios from "axios";
import Link from "next/link";
import { el } from "@faker-js/faker";

export default function MyTimagotchiList({ currentUser }) {

    const router = useRouter();
    const [loggedInUserId, setLoggedInUserId] = useState(null);
    const [tims, setTims] = useState([]);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        // setAuthToken(localStorage.getItem('jwtToken'));
        // if (localStorage.getItem('jwtToken')) {
        setLoggedInUserId(localStorage.getItem('userId'));
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/timagotchis/my-timagotchis/${currentUser._id}`)
            .then((response) => {
                // data is an object
                setTims(response.data);
                // let userData = jwtDecode(localStorage.getItem('jwtToken'));
                // if (userData.email === localStorage.getItem('email')) {
                //     setData(response.data.user[0]);
                //     setLoading(false);
                // } else {
                //     router.push('/users/login');
                // }

            })
            .catch((error) => {
                console.log(error);
                // router.push('/users/login');
            });
        // } else {
        //     router.push('/users/login');
        // }
    }, [router, currentUser]);


    let rows = [];
    if (tims.length === 0) {
        rows.push(<div >
            <br />
            <br />
            <h4 className='underlined'>NO TIMAGOTCHIS YET</h4>
            <h4 className='underlined'>CLICK <Link href='/users/new-timaghotchi'>HERE</Link> TO CREATE ONE</h4>
        </div>);
    } else {
        tims.forEach((timagotchi, index) => {
            rows.push(<MyTimagotchi Timagotchi={timagotchi} key={timagotchi._id} />);
        });
    }

    return (
        <section>
            <div className="d-flex justify-content-center" >
                {currentUser._id === loggedInUserId ?
                    <h1 className='underlined'>MY TIMAGOTCHIS</h1>
                    :
                    <h1 className='underlined'>{currentUser.firstName}&apos;s TIMAGOTCHIS</h1>
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