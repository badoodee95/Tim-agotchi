'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import handleLogout from '../utils/handleLogout';
import '@/app/globals.css';
import { useRouter } from 'next/navigation';
import Instructions from './Instructions';

export default function Header() {
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min');

        // Function to update userId state based on localStorage
        const updateUserIdFromLocalStorage = () => {
            if (typeof window !== 'undefined') {
                setUserId(localStorage.getItem('userId'));
            }
        };

        // Update userId state on initial load
        updateUserIdFromLocalStorage();

        // Listen for custom events to update userId state
        const handleUserLoggedIn = () => {
            updateUserIdFromLocalStorage();
        };

        const handleUserLoggedOut = () => {
            updateUserIdFromLocalStorage();
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('userLoggedIn', handleUserLoggedIn);
            window.addEventListener('userLoggedOut', handleUserLoggedOut);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('userLoggedIn', handleUserLoggedIn);
                window.removeEventListener('userLoggedOut', handleUserLoggedOut);
            }
        };
    }, []);
    
    let userAction;

    if (userId) {
        userAction =
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="menu-items nav-item">
                    <Link className="menu-items nav-link" href={`/users/profile/${userId}`}>&nbsp;&nbsp;PROFILE</Link>
                </li>

                <li className="nav-item">
                    <Link className="menu-items nav-link" href="/users/new-timagotchi">&nbsp;&nbsp;CREATE NEW TIM-AGOTCHI</Link>
                </li>
                <li className="nav-item">
                    <Link className="menu-items nav-link" href="/users/all">&nbsp;&nbsp;VISIT OTHER USERS</Link>
                </li>
                <hr />
                <li className="nav-item">
                    <Link className="menu-items nav-link" href="/users/login" onClick={handleLogout} >&nbsp;&nbsp;LOGOUT</Link>
                </li>
                <hr />
                <Instructions />
            </ul>;

    } else {
        userAction =
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

                <li className="nav-item">
                    <Link className="menu-items nav-link" href="/users/all">&nbsp;&nbsp;VISIT OTHER USERS</Link>
                </li>
                <hr />
                <li className="nav-item">
                    <Link className="menu-items nav-link" href="/users/login" >&nbsp;&nbsp;LOGIN</Link>
                </li>
                <hr />
                <Instructions />
            </ul>;
    }

    return (
        <nav className="navbar bg-customcolor1 fixed-top border-primary-subtle">
            <div className="container-fluid">
                <a className="menu-items navbar-brand mb-0 h1 text-light " href="/">TIM-AGOTCHI</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end my-offcanvas" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title underlined" id="offcanvasNavbarLabel">TIM-AGOTCHI</h5>  {/* We can put maybe the name of the tim-agotchi here */}
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <hr className='horizLine' />
                    <div className="offcanvas-body">
                        {userAction}
                    </div>
                </div>
            </div>
        </nav>
    );
}
