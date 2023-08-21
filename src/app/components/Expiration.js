'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import handleLogout from '@/app/utils/handleLogout';
import setAuthToken from '@/app/utils/setAuthToken';


export default function Expiration() {
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
}