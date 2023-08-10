'use client'

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Timagotchi from "@/app/components/Timagotchi";

export default function TimagotchiPage() {
    const router = useRouter();
    const { timagotchiId } = router.query;
    const [timagotchi, setTimagotchi] = useState({});

    useEffect(() => {
        axios.get()
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log('Error fetching timagotchi data', error);
        });
    }
    );

    return (
        <Layout>
            <Timagotchi name={timagotchi.name} age = {timagotchi.age} hunger={timagotchi.hunger} mood={timagotchi.mood} friendship={timagotchi.friendship} />
        </Layout>
    )


}