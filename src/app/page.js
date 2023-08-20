'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './page.module.css';
import MyTimagotchi from './components/MyTimagotchi';
import { LoadingCircle } from './components/Loading';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import setAuthToken from './utils/setAuthToken';
import handleLogout from './utils/handleLogout';
import jwtDecode from 'jwt-decode';
import 'animate.css';

export default function Home() {
  const [timagotchis, setTimagotchis] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== undefined) {
      const expirationTime = new Date(parseInt(localStorage.getItem('expiration')) * 1000);
      let currentTime = Date.now();

      setAuthToken(localStorage.getItem('jwtToken'));
      // make a condition that compares exp and current time
      if (currentTime >= expirationTime) {
        handleLogout();
        alert('Session has ended. Please login to continue.');
        router.push('/users/login');
      }
    }
  }, [router]);

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

  useEffect(() => {
    setAuthToken(localStorage.getItem('jwtToken'));
    if (localStorage.getItem('jwtToken')) {
      axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/users`)
        .then((response) => {
          // data is an object
          // console.log('response', response.data);
          let userData = jwtDecode(localStorage.getItem('jwtToken'));
          console.log('userData', userData);
          if (userData.email === localStorage.getItem('email')) {
            setIsLoading(false);
            axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/timagotchis`)
              .then((response) => {
                console.log(response.data);
                setTimagotchis(response.data);
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
  }, [router]);

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
