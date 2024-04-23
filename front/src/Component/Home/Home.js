import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
function Home() {
  return (
  <div>
<div>
<div className='home'>

 <h1 className='Un'>Un délice alliant
prestige et gourmandise</h1>
 <Link  to={"/Product"} ><button className='DEC'>DÉCOUVRER NOS PRODUIT </button></Link> 
  
 
   </div>


    <img className='img1' src='https://maitredattier.com/wp-content/uploads/2023/02/Maitre-Dattier-03-22-09-scaled-1-1024x684-1.jpg' alt='' />
    <h1 className='Un1'>Les dattes Maître Dattier, au goût unique et au design élégant, orneront vos tables du plus bel      habillage</h1>
    <Link to={"/About"} ><button className='DEC1'> DÉCOUVREZ NOTRE HISTOIRE</button></Link>
    

    <img className='img2' src='https://maitredattier.com/wp-content/uploads/2023/02/Web_Maitre-Dattier-Boutique-42.jpg' alt=''/>
      <h1 className='Un2'>
      Offrez un voyage de saveurs uniques<br/> avec les créations Maître Dattier</h1>
      <Link to={"/Contact"}><button className='DEC2'>Contactez nous</button></Link>

      
      </div>

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

export default Home