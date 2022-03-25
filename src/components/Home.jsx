import React from "react";
import HomePageCSS from '../css/HomePageCSS.css';
import { BrowserRouter as Router ,Routes ,Route, BrowserRouter,Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import {AiTwotoneMail} from "react-icons/ai";
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillFacebook} from 'react-icons/ai';
function Home()
{
    const name="Cîrdei Vasile-Petrisor";
     const logo =require('../images/download.png');
    return(
        <React.StrictMode>
        
        <header className="header">
        <div className="pagesSet">
        <img className="imageSet" src={'logo'}/>
        <Link className="meniu" to="/">
            <span>Home</span>
        </Link>
        <Link className="meniu" to="/About">
            <span>About</span>
        </Link>
        <Link className="meniu" to="/Contact">
            <span> Contact</span>
        </Link>
        
            <a className="spatiu" href="https://www.facebook.com/" > <AiFillFacebook/></a>
            <a className="meniu" href="https://twitter.com/home"> <AiOutlineTwitter/></a>
            <a className="meniu" href="https://mail.google.com/mail/u/0/#inbox"><AiTwotoneMail/></a> 
        </div>
            
        </header>
        <footer className="footerSettings">
            <span>Internsip 2022</span>
            <span className="distantare" >Created by:{name} </span>
        </footer>
        <Routes>
                 
                 <Route path="/About" element={<About/>}/>
                 <Route path="/Contact" element={<Contact/>}/>
         </Routes>
        </React.StrictMode>
    );
}
export default Home;