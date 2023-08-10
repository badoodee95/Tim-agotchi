'use client';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ActionButton() {
    const [showMessage, setShowMessage] = useState('');

    const toggleMessage = () => {
        setShowMessage(!showMessage);
    };

    return (
        <div>
            <h1>Click Button Example</h1>
            <button type='button' className='btn btn-primary' onClick={toggleMessage}>Toggle Message</button>
            {showMessage && <p>This is the hidden message!</p>}
        </div>
    );
}

