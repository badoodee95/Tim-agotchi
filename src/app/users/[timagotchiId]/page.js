'use client';
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Timagotchi from "@/app/components/Timagotchi";
import { LoadingCircle } from "@/app/components/Loading";
import jwtDecode from "jwt-decode";
import setAuthToken from "@/app/utils/setAuthToken";
import { useRouter } from "next/navigation";


export default function TimagotchiPage() {
    const { timagotchiId } = useParams();
    const [timagotchi, setTimagotchi] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        setAuthToken(localStorage.getItem('jwtToken'));
        if (localStorage.getItem('jwtToken')) {
            axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/users`)
                .then((response) => {
                    let userData = jwtDecode(localStorage.getItem('jwtToken'));
                    if (userData.email === localStorage.getItem('email')) {
                        axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/timagotchis/${timagotchiId}`)
                            .then((response) => {
                                setTimagotchi(response.data.timagotchi);
                                setIsLoading(false);
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
    }, [router, timagotchiId]);

    if (isLoading) return (<LoadingCircle />);

    return (

        <div style={{ overflowY: 'scroll' }}>
            <Timagotchi timagotchi={timagotchi} />
        </div>

    );
}