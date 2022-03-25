import React from "react";
import AboutPageCSS from '../css/AboutPageCSS.css';
import { BrowserRouter as Router ,Routes ,Route, BrowserRouter,Link } from 'react-router-dom';
import Home from '../components/Home';

function About()
{
    return (
        <React.StrictMode>
            
        <Link to='/'>
                <h1>HOME</h1>
            </Link>
        <div className="center">
            
    <h1 className>You are currently on the About Page</h1>
    
    </div> 
    </React.StrictMode>
    );

}

export default About;