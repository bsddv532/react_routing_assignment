// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom' 
import Home from './Components/Home';
import Student from './Components/Student';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/student" element={<Student/>} />
          <Route path="/contact" element={<Contact/>} />      
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
