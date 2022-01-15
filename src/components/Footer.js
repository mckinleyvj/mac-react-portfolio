import React from 'react';
import '../styles/Footer.css';

export default function Footer({ userdetails }) {
  return (
    <footer>
            Copyright - {userdetails.firstname} &copy;
    </footer>
  );
}