'use client';
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Timagotchi from "@/app/components/Timagotchi";
import { LoadingCircle } from "@/app/components/Loading";


export default function TimagotchiPage() {
    const { timagotchiId } = useParams();
    const [timagotchi, setTimagotchi] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/timagotchis/${timagotchiId}`)
            .then((response) => {
                setTimagotchi(response.data.timagotchi);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [timagotchiId]);

    if (isLoading) return (<LoadingCircle />);

    return (

        <div style={{ overflowY: 'scroll' }}>
            <Timagotchi timagotchi={timagotchi} />
        </div>

    );
}