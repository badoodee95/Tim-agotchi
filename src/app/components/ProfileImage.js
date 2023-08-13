'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LoadingLine } from './Loading';


export default function UploadProfileImage({ profileImage, updateUserData }) {
    // const [redirect, setRedirect] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [imageUploaded, setImageUploaded] = useState(false);

    useEffect(() => {
        const handle = (image) => {
            const formData = new FormData();
            formData.append('file', image);
            formData.append('upload_preset', 'timagotchi');
            fetch('https://api.cloudinary.com/v1_1/instaversecloud/image/upload', {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('image url', data.secure_url);
                    const secureUrl = data.secure_url;
                    const updateUser = { avatar: secureUrl };
                    axios.put(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/${localStorage.getItem('userId')}`, updateUser)
                        .then((response) => {
                            updateUserData(response.data.user);
                            setLoading(false);
                            setImageUploaded(true);

                        })
                        .catch((error) => console.log('Error', error));
                })
                .catch((error) => console.log('Error', error));
        };
        if (!imageUploaded) {
            handle(profileImage);
        }
    }, [profileImage, updateUserData, imageUploaded]);

    if (isLoading) return (<LoadingLine />);
}