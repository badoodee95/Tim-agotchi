'use client';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import styles from '@/app/EditModal.module.css';
import ProfileImage from '@/app/components/ProfileImage.js';
import axios from 'axios';
import handleLogout from '../utils/handleLogout';
import { useRouter } from 'next/navigation';

export default function EditModal({ user, reload }) {
    const [show, setShow] = useState(false);
    const [data, setData] = useState(user);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [mainProfileImage, setMainProfileImage] = useState(null);
    const router = useRouter();
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


    function handleRelease() {
        if (timagotchi.alive === false) {
            alert('You cannot release a dead timagotchi!');
        } else {
            if (confirm('Are you sure you want to release your timagotchi?')) {
                if (confirm('Are you really sure? Once you release your timagotchi, you cannot get it back!')) {
                    axios.delete(`${process.env.NEXT_PUBLIC_SERVER_URL}/timagotchis/${timagotchi._id}`)
                        .then(response => {
                            alert('Your timagotchi has been released!');
                            router.push(`/users/profile/${userId}`);
                        })
                        .catch(error => {
                            console.log('Error updating timagotchi', error);
                        });
                }
            }
        }
    }

    const handleDelete = (e) => {
        e.preventDefault();
        if (confirm('Are you sure you want to delete your account?')) {
            axios.delete(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/${localStorage.getItem('userId')}`)
                .then((response) => {
                    axios.delete(`${process.env.NEXT_PUBLIC_SERVER_URL}/timagotchis/deleteMany/${localStorage.getItem('userId')}`)
                        .then((response) => {
                            handleLogout();
                            alert('Your account has been deleted and timagotchis deleted.');
                            router.push('/users/login');
                        });
                });
        }
    };

    return (
        <div>
            {localStorage.getItem('userId') === user._id &&
                <Button variant="info" id={styles.buttonText} onClick={handleShow}>
                    EDIT PROFILE
                </Button>}

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
                    <Modal.Footer id={styles.backgroundImage}>
                        <Button variant="secondary" onClick={handleClose} id={styles.buttonText}>
                            CLOSE
                        </Button>
                        <Button variant="primary" type='submit' onSubmit={handleSubmit} onClick={handleClose} id={styles.buttonText}>
                            SAVE CHANGES
                        </Button>
                        <Button variant="danger" type='submit' onClick={handleDelete} id={styles.buttonText}>
                            DELETE ACCOUNT
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    );
}

