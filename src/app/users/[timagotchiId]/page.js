'use client'

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Timagotchi from "@/app/components/Timagotchi";
import Header from "@/app/components/Header";

export default function TimagotchiPage() {
    const { timagotchiId } = useParams();
    const [timagotchi, setTimagotchi] = useState({});

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/timagotchis/64d46540530ee66922af7239/${timagotchiId}`)
        .then((response) => {
            const foundTimagotchi = response.data.timagotchi;  
            console.log('foundTimagotchi', foundTimagotchi)
            setTimagotchi(foundTimagotchi);
        })
        .catch((error) => {
            console.log('Error fetching timagotchi data', error);
        });
    }
    ), [];

    if (!timagotchi.name) return (<div>Loading...</div>);

    return (
        <div>
            <Header />
            <Timagotchi name={timagotchi.name} age={timagotchi.age} hunger={timagotchi.food} mood={timagotchi.mood} friendship={timagotchi.friendship.value} />
        </div>
    )
}