'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './page.module.css';
import MyTimagotchi from './components/MyTimagotchi';
import { LoadingCircle } from './components/Loading';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import 'animate.css';
import Expiration from './components/expiration';

export default function Home() {
  const [timagotchis, setTimagotchis] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // <Expiration />;

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/timagotchis`)
      .then((response) => {
        console.log(response.data);
        setTimagotchis(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isLoading) return <LoadingCircle />;

  return (
    <main>
      <title>tim-agotchi - Home</title>
      <div id={styles.backgroundImage}></div>
      <section className='' id={styles.myTimagotchis}>
        <h1 className='text-center' id={styles.text}>ALL TIMAGOTCHIS</h1>
        <div className='animate__animated animate__fadeInUp d-flex flex-wrap justify-content-center mt-4' >
          {timagotchis.map((timagotchi) => (
            <Link href={`users/${timagotchi._id}`} key={timagotchi._id} className='text-decoration-none'>
              <MyTimagotchi Timagotchi={timagotchi} key={timagotchi._id} />
            </ Link>
          ))}
        </div>
      </section>
    </main>
  );
}
