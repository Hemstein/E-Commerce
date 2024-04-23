
import {Route, Routes} from "react-router-dom"
import ProductList from "./ProductList";
import Login from "./Component/Login/Login";
import Profile from "./Component/Profile/Profile";
import { useEffect } from "react";
import { getCurrent } from "./Redux/Action/ActionUser";
import { useDispatch } from "react-redux";
import { getproduct } from "./Redux/Action/ActionProduct";
import Addproduct from "./Addproduct";
import Editproduct from "./Editproduct";
import PrivateRout from "./PrivateRout";

import "./Component/Navbar/Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavS from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import Productt from "./Component/Product/Productt";
import Register from "./Component/Register/Register";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";


function App() {
  const dispatch=useDispatch()
  useEffect(() => {
   dispatch(getCurrent())
   dispatch(getproduct())
  }, [])
  const token=localStorage.getItem("token")
  return (
    <div className="App">
      <NavS/>
    



  <Routes>
    <Route path="/" element={  <Home/>} />
    <Route path="/register" element={<Register/>}/>
   { !token ?<Route path="/login" element={<Login/>} />:null}
    <Route path="/profile" element={<PrivateRout><Profile/></PrivateRout>} />
    <Route path="/addproduct" element={<Addproduct/>}/>
    <Route path="/edit/:id" element={<Editproduct/>}/>
    <Route path="/Product" element={<Productt/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
   
   
  

  </Routes>
     
     
    </div>
  );
}

export default App;
