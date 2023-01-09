
import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Employee from './components/Employee';

function App() {
  return (
    <>
    <div className="App">
   
    
    
    <Router>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Shop/>}></Route>
    <Route exact path="/emp" element={<Employee/>}></Route>
    </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
