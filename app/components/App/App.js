import React from 'react';
import styles from './App.css';

import Header from '../Header/Header';

export default function App() {
  return (
    <div>
      <Header />
      <h1 className={styles.header}>Hello React World!!</h1>
    </div>
  );
}
