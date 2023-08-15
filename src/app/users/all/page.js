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
import { useRouter } from 'next/navigation';

export default function ProfileTest() {
    const [userId, setUserId] = useState('');
    const [users, setUsers] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/users`);
                setUsers(response.data.users);
                setIsLoading(false);
            } catch (error) {
                console.log('Error fetching user data', error);
            }
        };

        fetchUserData();

        if (typeof window !== 'undefined') {
            setUserId(localStorage.getItem('userId'));
        }
    }, [userId]);

    if (userId === null) {
        router.push('/users/login');
    }

    if (isLoading) return (<LoadingCircle />);

    let rows = [];
    users.forEach((user, index) => {
        rows.push(<AllUsers user={user} key={index} />);
    });

    return (
        <>
            <title>tim-agotchi - View All Users</title>
            <div id={styles.backgroundImage}></div>
            <section className='mt-4 mb-4' id={styles.viewAllUsers}>
                {rows}
            </section >
        </>
    );
};