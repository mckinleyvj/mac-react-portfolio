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
      <Header userdetails={userdetails}/>
      <Main userdetails={userdetails}/>
      <Footer userdetails={userdetails}/>
    </>
  );
}

export default App;