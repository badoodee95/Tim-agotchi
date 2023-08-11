'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import setAuthToken from './utils/setAuthToken';
import ActionButton from './components/ActionButton';
import Header from './components/Header';
import Footer from './components/Footer';
import MyTimagotchi from './components/MyTimagotchi';
import MyTimagotchiList from './components/MyTimagotchisList';
import EditModal from './components/EditModal';

// we are going to be fetching data from our API and displaying it on
// the page

export default function Home() {

  return (
    <main>
      <EditModal />
    </main>
  );
}
