import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/Action/ActionUser';
import { useNavigate } from 'react-router-dom';
import "./Profile.css"

function Profile() {
  useEffect(() => {
   // axios.get('http://localhost:4000/api/user/current',{ headers: { Authorization: `Bearer ${token}` } }).then((result) => {
    //    console.log(result.data)
    //  }).catch((err) => {
    //console.log(err)
     // });
  
    
  }, [])
   const data=useSelector(state=>state.UserReducer.user)
   console.log(data)
   const dispatch=useDispatch()
   const navigate=useNavigate()
   const handelclick=()=>{

    dispatch(logout())
    navigate("/login")
   }
  return (
    <div>
        
        <div class="wrapper">
    <div class="profile">
        <div class="overlay">
            <div class="about d-flex flex-column">
                <h4>{data.name}</h4> <span>{data.email}</span>
            </div>
           
        </div>
    </div>
</div>
        <button className='Bon1' onClick={handelclick}>logout</button>
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
            <ul class="social-icons">
          
            </ul>
          </div>
        </div>
      </div>
</footer>
      
    </div>
  )
}

export default Profile