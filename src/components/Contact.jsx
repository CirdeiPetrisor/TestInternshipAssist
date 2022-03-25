import React, { useState } from "react";
import { BrowserRouter as Router ,Routes ,Route, BrowserRouter,Link } from 'react-router-dom';
import Home from '../components/Home';

function Contact()
{
const [name,setName]=useState("");
const [surname,setSurname]=useState("");
const [number,setNumber]=useState("");
const [email,setEmail]=useState("");

function afiseaza()
{
var myJson=
{
    Nume:name,
    Prenume:surname,
    NumarTelefon:number,
    Email:email
}
console.log(myJson);
}  
 return (
    <React.StrictMode>
        <Link to='/'>
                <h1>HOME</h1>
            </Link>
        <form>
  <fieldset>
    <legend>Contact informations</legend>
    <p>
    <label for="size_1">Name</label>
      <input type="text"   value={name} onChange={e=>setName(e.target.value)}/>
      
    </p>
    <p>
    <label for="size_2">Surmane</label>
      <input type="text"   value={surname}   onChange={e=>setSurname(e.target.value)} />
      
    </p>
    <p>
    <label for="size_3">Phone number</label>
      <input type="text"    value={number} onChange={e=>setNumber(e.target.value)} />
      
    </p>
    <p>
    <label for="size_3">Email</label>
      <input type="text"    value={email} onChange={e=>setEmail(e.target.value)} />
      
    </p>
    
  </fieldset>
  <section>
      <p>
      <button onClick={afiseaza()}>Submit</button>
      </p>
      </section>
</form> 

    </React.StrictMode>
 );
 
}

export default Contact;