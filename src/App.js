// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar  from './component/Navbar';
import Overview from './pages/Overview';
import Features from './pages/Features';
import About from './pages/About';

function App() {
  return (
    <Router>
    <div >
      <Navbar />
      <Overview />
      <Routes>
  <Route path= "./" element={<Overview/>} />
  <Route path="./features" element={<Features />}/>
  <Route path='./about' element = {<About />} /> 
</Routes>
    </div>
    </Router>
  );
}

export default App;
