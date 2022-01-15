import React from "react";
import './styles/Reset.css';
import './styles/Global.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './styles/MediaQuery.css';

import userdetails from './userdetails';


const public_images = process.env.PUBLIC_URL + `/images/`;
const public_docs = process.env.PUBLIC_URL + `/docs/`;

const image_ext = ".png" || ".PNG" || ".Png";

function App() {
  return (
    <>
      <Header userdetails={userdetails} />
      <Main userdetails={userdetails} public_images={public_images} public_docs={public_docs} image_ext={image_ext}/>
      <Footer userdetails={userdetails}/>
    </>
  );
}

export default App;