'use client';
import MyTimagotchiList from '@/app/components/MyTimagotchisList';
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect, use } from 'react';
import { useParams } from 'next/navigation';
import EditModal from '@/app/components/EditModal';
import styles from '@/app/profile.module.css';
import axios from 'axios';
import { LoadingCircle } from '@/app/components/Loading';
import AllUsers from '@/app/components/AllUsers';

export default function ProfileTest() {

    const { userId } = useParams();
    const [users, setUsers] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/users`);
                console.log('profile page response', response.data);
                setUsers(response.data.users);
                setIsLoading(false);
            } catch (error) {
                console.log('Error fetching user data', error);
            }
        };

        fetchUserData();
    }, [userId]);

    if (isLoading) return (<LoadingCircle />);

    let rows = [];
    users.forEach((user, index) => {
        rows.push(<AllUsers user={user} key={index} />);
    });

    return (
        <>
            <section className='vh-100 bg-image' id={styles.viewAllUsers}>
                {rows}
            </section >
        </>
    );
};