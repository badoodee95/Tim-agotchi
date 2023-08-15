'use client';
import MyTimagotchi from "./MyTimagotchi";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export default function MyTimagotchiList({ currentUser }) {
    const [loggedInUserId, setLoggedInUserId] = useState(null);
    const [tims, setTims] = useState([]);

    useEffect(() => {

        setLoggedInUserId(localStorage.getItem('userId'));
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/timagotchis/my-timagotchis/${currentUser._id}`)
            .then((response) => {
                // data is an object
                setTims(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [currentUser]);

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