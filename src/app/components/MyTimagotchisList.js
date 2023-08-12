'use client';
import MyTimagotchi from "./MyTimagotchi";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import jwtDecode from "jwt-decode";
import axios from "axios";
import Link from "next/link";
import { el } from "@faker-js/faker";

export default function MyTimagotchiList({ currentUserId }) {

    const router = useRouter();
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [tims, setTims] = useState([]);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        // setAuthToken(localStorage.getItem('jwtToken'));
        // if (localStorage.getItem('jwtToken')) {
        setLoggedInUser(localStorage.getItem('userId'));
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/timagotchis/my-timagotchis/${localStorage.getItem('userId')}`)
            .then((response) => {
                // data is an object
                console.log('response', response.data);
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
    }, [router]);


    let rows = [];
    if (tims.length === 0) {
        rows.push(<div className="justify-content-center" >
            <br />
            <br />
            <h4 className='underlined'>NO TIMAGOTCHIS YET</h4>
            <h4 className='underlined'>CLICK <Link href='/users/new-timaghotchi'>HERE</Link> TO CREATE ONE</h4>
        </div>);
    } else {
        tims.forEach((Timagotchi, index) => {
            rows.push(<MyTimagotchi Timagotchi={Timagotchi} key={index} />);
        });
    }

    return (
        <section>
            <div className="d-flex justify-content-center" >
                <h1 className='underlined'>MY TIMAGOTCHIS</h1>
            </div>
            <div className='container'>
                <div className='row row-cols-auto'>
                    {rows}

                </div>
            </div>
        </section>
    );
};