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

const image_ext = ".png"; //have to ensure when importing images, rename extensions to .png. Will work on accepting different formats in the future.
const gitUsrname = userdetails.github_username;

const renderMainPage = () => {
    return <Main userdetails={userdetails} gitUsrname={gitUsrname} public_images={public_images} public_docs={public_docs} image_ext={image_ext}/>
};

function App() {
  return (
    <>
      <Header userdetails={userdetails}/>
      {renderMainPage()}
      <Footer userdetails={userdetails}/>
    </>
  );
}

export default App;