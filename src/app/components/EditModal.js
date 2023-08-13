'use client';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import styles from '@/app/EditModal.module.css';
import ProfileImage from '@/app/components/ProfileImage.js';
import axios from 'axios';

export default function EditModal({ user, reload }) {

    const [show, setShow] = useState(false);
    const [data, setData] = useState(user);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [mainProfileImage, setMainProfileImage] = useState(null);

    const updateUserData = (newUserData) => {
        setData(newUserData);
    };
    const handleFileOpen = (event) => {
        const file = event.target.files[0];
        if (file) {
            setMainProfileImage(file);
        }
    };

    const handleChange = (e) => {
        setData(prevState => ({ ...data, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/${localStorage.getItem('userId')}`, data)
            .then((response) => {
                updateUserData(response.data.user);
            });

    };
    return (
        <div>
            <Button variant="info" id={styles.buttonText} onClick={handleShow}>
                EDIT PROFILE
            </Button>

            <Modal show={show} onHide={handleClose} onExit={reload}>
                <Modal.Header closeButton id={styles.backgroundImage}>
                    <Modal.Title id={styles.modalTitle}>EDIT PROFILE</Modal.Title>
                </Modal.Header>
                <Form id={styles.backgroundImage} onSubmit={handleSubmit}>
                    <Form.Group className={`mb-3 ${styles.avatar}`} controlId="Profile Image">
                        <br />
                        <div >
                            <img src={data.avatar || "https://freesvg.org/img/abstract-user-flat-4.png"}
                                alt="User Avatar" className={styles.avatarImg} />
                        </div>
                        <br />
                        <label variant='primary' htmlFor='profilePicture' className={styles.customFileUpload}>CHANGE PROFILE IMAGE</label>
                        <input type="file" id="profilePicture" name="profilePicture" className="form-control-file" accept='.png, .jpg, .jpeg' onChange={handleFileOpen} style={{ display: 'none' }} />
                        {mainProfileImage && <ProfileImage profileImage={mainProfileImage} updateUserData={updateUserData} />}
                    </Form.Group>
                    <Form.Label id={styles.emailTitle}>EMAIL ADDRESS</Form.Label>
                    <Form.Group className={`mb-3 ${styles.inputTextPosition}`} controlId="Email Address">
                        <input className={`${styles.inputBar} form-control`}
                            type="email"
                            name='email'
                            value={data.email}
                            onChange={handleChange}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Label id={styles.firstName}>FIRST NAME</Form.Label>
                    <Form.Group className={`mb-3 ${styles.inputTextPosition}`} controlId="First Name">
                        <input className={`${styles.inputBar} form-control`}
                            type="text"
                            name='firstName'
                            value={data.firstName}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Label id={styles.lastName}>LAST NAME</Form.Label>
                    <Form.Group className={`mb-3 ${styles.inputTextPosition}`} controlId="Last Name">
                        <input className={`${styles.inputBar} form-control`}
                            type="text"
                            name='lastName'
                            value={data.lastName}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Label id={styles.location}>LOCATION</Form.Label>
                    <Form.Group className={`mb-3 ${styles.inputTextPosition}`} controlId="Location">
                        <input className={`${styles.inputBar} form-control`}
                            type="text"
                            name='location'
                            value={data.location}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    {/* </Form> */}
                    <Modal.Footer id={styles.backgroundImage}>
                        <Button variant="secondary" onClick={handleClose} id={styles.buttonText}>
                            CLOSE
                        </Button>
                        <Button variant="primary" type='submit' onSubmit={handleSubmit} onClick={handleClose} id={styles.buttonText}>
                            SAVE CHANGES
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    );
}

