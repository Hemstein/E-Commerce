import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../Redux/Action/ActionUser';
import  "./Login.css"



function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handelclick=()=>{

   /* axios.post('http://localhost:4000/api/user/login',{email,password}).then((result) => {
        console.log(result.data)
      }).catch((err) => {
    console.log(err)
      });
      navigate("/profile") */
      dispatch(loginUser({email,password},navigate))
  }
  const error=useSelector(state=>state.UserReducer.err)
  return (
    //<div>
      /* <label>Email</label>
       <input onChange={(e)=>setEmail(e.target.value)}/>
       <label>Password</label>
       <input onChange={(e)=>setPassword(e.target.value)}/>
       <p>{error?error:null}</p>
       <button onClick={handelclick}>Login</button>*/
       <div>
   <div id='v123' class="vh-100">
  <div class="container-fluid">
    <div class="row">
      <div id='Colo1' class="col-sm-6 text-black">

        <div class="px-5 ms-xl-4">
          <i id='c1' class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" /*style="color: #709085;"*/></i>
          
        </div>

        <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

          <form className='for12' >

            <h3 id='c12' class="fw-normal mb-3 pb-3" /*style="letter-spacing: 1px;"*/>Log in</h3>

            <div data-mdb-input-init class="form-outline mb-4">
              <input type="email" id="form2Example18" class="form-control form-control-lg" onChange={(e)=>setEmail(e.target.value)}/>
              <label class="form-label" for="form2Example18">Email address</label>
            </div>

            <div data-mdb-input-init class="form-outline mb-4">
              <input type="password" id="form2Example28" class="form-control form-control-lg" onChange={(e)=>setPassword(e.target.value)}/>
              <label class="form-label" for="form2Example28">Password</label>
            </div>

            <div class="pt-1 mb-4">
              <button data-mdb-button-init data-mdb-ripple-init class="btn btn-info btn-lg btn-block" type="button" onClick={handelclick}>Login</button>
            </div>

            <p class="small mb-5 pb-lg-2"><a class="text-muted" href="#!">Forgot password?</a></p>
            <p>Don't have an account? <a href='http://localhost:3000/Register' class="link-info">Register here</a></p>

          </form>

        </div>

      </div>
      <div class="col-sm-6 px-0 d-none d-sm-block">
        <img className='ImgL1' src="https://images.unsplash.com/photo-1597355495449-a35be801476c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTN8fHxlbnwwfHx8fHw%3D"
          alt="Login"  />
      </div>
    </div>
  </div>
</div>
<footer id='f321' class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>À PROPOS DE NOUS</h6>
            <p class="text-justify">Les dattes de Maître Dattier, au goût unique et au design élégant, orneront vos tables du plus bel habillage.

Faites-nous part de votre demande particulière, nous tâcherons de répondre au mieux à vos attentes</p>
          </div>

          

          <div class="col-xs-6 col-md-3">
            <h6>MENU</h6>
            <ul class="footer-links">
              <li><a href='http://localhost:3000/'>Accueil</a></li>
              <li><a href='http://localhost:3000/About'>À propos de nous</a></li>
              <li><a href='http://localhost:3000/Product'>Boutique</a></li>
              <li><a href='http://localhost:3000/contact'>Contactez-nous</a></li>
              
            </ul>
          </div>
        </div>
        
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a href='http://localhost:3000/'> Maître Dattier</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            
          </div>
        </div>
      </div>
</footer>

    </div>
  )
}

export default Login