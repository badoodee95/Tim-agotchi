'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import handleLogout from '../utils/handleLogout';
import '@/app/globals.css';

export default function Header() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min");
    }, []);
    return (

        <nav className="navbar bg-customcolor1 fixed-top border-primary-subtle">
            <div className="container-fluid">
                <a className="navbar-brand mb-0 h1 text-light" href="/">Tim-agotchi</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Tim-agotchi</h5>  {/* We can put maybe the name of the tim-agotchi here */}
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link className="hover nav-link" href={`/users/profile-test/${localStorage.getItem('userId')}`}>Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="hover nav-link" href="/users/new-timagotchi">Create New Tim-agotchi</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="hover nav-link" href="/users/all">View All Users</Link>
                            </li>
                            <hr />
                            <li className="nav-item">
                                <Link className="hover nav-link" href="/users/login" onClick={handleLogout}>Signout</Link>
                            </li>
                            <hr />
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    );
}
