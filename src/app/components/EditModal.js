import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import styles from '@/app/EditModal.module.css';

export default function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="info" id={styles.buttonText} onClick={handleShow}>
                EDIT PROFILE
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton id={styles.backgroundImage}>
                    <Modal.Title id='contained-modal-title-vcenter' id={styles.modalTitle}>EDIT PROFILE INFORMATION</Modal.Title>
                </Modal.Header>
                <Form id={styles.backgroundImage}>
                    <Form.Group className="mb-3" controlId="Email Address">
                        <Form.Label id={styles.emailTitle}>EMAIL ADDRESS</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="First Name">
                        <Form.Label id={styles.firstName}>FIRST NAME</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="First Name"

                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Last Name">
                        <Form.Label id={styles.lastName}>LAST NAME</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Last Name"

                        />
                    </Form.Group>
                </Form>
                <Modal.Footer id={styles.backgroundImage}>
                    <Button variant="secondary" onClick={handleClose} id={styles.buttonText}>
                        CLOSE
                    </Button>
                    <Button variant="primary" onClick={handleClose} id={styles.buttonText}>
                        SAVE CHANGES
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

