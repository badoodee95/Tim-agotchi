'use client';

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Timagotchi from "@/app/components/Timagotchi";
import Loading from "@/app/components/Loading";
import Header from "@/app/components/Header";
import { Island_Moments } from "next/font/google";

export default function TimagotchiPage() {
    const { timagotchiId } = useParams();
    const [timagotchi, setTimagotchi] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/timagotchis/${timagotchiId}`)
            .then((response) => {
                console.log('timagotchi page response', response.data);
                setTimagotchi(response.data.timagotchi);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [timagotchiId]);

    if (isLoading) return (<Loading />);

    return (
        <div>
            <Timagotchi timagotchi={timagotchi} />
        </div>
    );
}