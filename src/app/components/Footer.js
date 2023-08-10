import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Footer() {
    return (
        <footer className="footer bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <a className="footer-brand" href="#">
                            Tim-agotchi
                        </a>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="#">Home</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">Features</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">Pricing</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};