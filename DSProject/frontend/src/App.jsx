import Navbar from "./components/NavScrollExample"
import Card from "./components/Card"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hero from "./components/Hero"; 
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemAdd from "./components/ItemAdd";
import Home from "./Home";
import AddPage from "./AddPage";
import 'react-toastify/dist/ReactToastify.css';



function App() {
  
    
    return (
      <div>
     <ToastContainer/>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/Home" exact element={<Home/>}/>
            <Route path="/Add" exact element={<AddPage/>}/>
            {/* <Route path="" */}
          </Routes>
        </BrowserRouter>
      </div>
    );
  
  
}

export default App;
