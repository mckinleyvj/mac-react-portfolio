import React from "react";
import './styles/Reset.css';
import './styles/Global.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './styles/MediaQuery.css';

import userdetails from './userdetails';

function App() {
  return (
    <>
      <Header />
      <Main userdetails={userdetails}/>
      <Footer />
    </>
  );
}

export default App;