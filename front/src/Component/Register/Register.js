import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import{useNavigate} from 'react-router-dom'
import {adduser } from '../../Redux/Action/ActionUser';
import axios from 'axios';
import "./Register.css"

function Register() {
  const [newemail,setemail] =useState("");
  const [newname,setname] =useState("");
  const [newpassword,setpassword]=useState("");
 // const [photo,setphoto]=useState();
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handelclick=()=>{
 
    //  data.append("file",photo)
      // 2eme methode
   /* axios.post('http://localhost:4000/api/user/register',data).then((result) => {
      console.log(result.data)
     }).catch((err) => {
      console.log(err)
   });*/
     // navigate("/login")
  dispatch(adduser({email:newemail,name:newname,password:newpassword},navigate))

  } 
   return (
   /* <div>
       <label>Email</label>
       <input onChange={(e)=>setemail(e.target.value)}/>
       <label>Name</label>
       <input onChange={(e)=>setname(e.target.value)}/>
       <label>Password</label>
       <input type='password' onChange={(e)=>setpassword(e.target.value)}/>
      {/* <label>Photo</label>
       <input type='file' onChange={(e)=>setphoto(e.target.files[0])}/>*}
       //<button onClick={handelclick}>Register</button>*/

<div>
    
<section id='Re1' class="background-radial-gradient overflow-hidden">
  

  <div id='RE12' class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
    <div class="row gx-lg-5 align-items-center mb-5">
      <div class="col-lg-6 mb-5 mb-lg-0" /*style="z-index: 10"*/>
        <h1 class="my-5 display-5 fw-bold ls-tight" /*style="color: hsl(218, 81%, 95%)"*/>
        Maitre Dattier 
        </h1>
        <p class="mb-4 opacity-70" /*style="color: hsl(218, 81%, 85%)" */>
        Sublimer ce bijou du désert...C'est la promesse de Maitre Dattier
        </p>
      </div>

      <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

        <div class="card bg-glass">
          <div class="card-body px-4 py-5 px-md-5">
            <form>
               
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div data-mdb-input-init class="form-outline">
                    <input type="text" id="form3Example1" class="form-control"onChange={(e)=>setname(e.target.value)} />
                    <label class="form-label" for="form3Example1">Full Name</label>
                  </div>
                </div>
                
              </div>

             
              <div data-mdb-input-init class="form-outline mb-4">
                <input type="email" id="form3Example3" class="form-control" onChange={(e)=>setemail(e.target.value)}/>
                <label class="form-label" for="form3Example3">Email </label>
              </div>

               
              <div data-mdb-input-init class="form-outline mb-4">
                <input type="password" id="form3Example4" class="form-control" onChange={(e)=>setpassword(e.target.value)} />
                <label class="form-label" for="form3Example4">Password</label>
              </div>

              

                
              <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4" onClick={handelclick}>
                Register
              </button>

              
              <div class="text-center">
               
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<footer class="site-footer">
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

export default Register