import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Routes ,Route, BrowserRouter,Link } from 'react-router-dom';
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
function App() {
  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Contact' element={<Contact />}/>
      </Routes>
    </Router>
  );
}

export default App;
