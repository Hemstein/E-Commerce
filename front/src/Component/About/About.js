import React from 'react'
import "./About.css"
import { Link } from 'react-router-dom'

function About() {
  return (
  
   
   <div>

    <div className='Ab'>

        <p className='Ap'>À propos du maître
Les couleurs, les odeurs, le goût…<br/><br/><br/>

Maître Dattier, passionné des métiers de bouche depuis<br/>
 son plus jeune âge, laissera ses sens décider de son avenir.<br/>
  Le renouveau mêlé à l’authentique, le traditionnel mêlé à la modernité,<br/>
   le talent mêlé à l’originalité… À l’image des plus grands designers, sa créativité
    le mènera à l’excellence.<br/><br/>.Après avoir travaillé dans la haute gastronomie , dans les
     établissements Sheraton, ou encore l’Hôtel Raphael, il décidera de créer sa propre maison,<br/>
      son lieu de prédilection, sa marque… Maître Dattier.</p>
        <img className='Ai' src='https://maitredattier.com/wp-content/uploads/2023/02/DSC5834-scaled-1-900x1359-1.jpg' alt=''/>

        <img className='Ai1'src='https://maitredattier.com/wp-content/uploads/2023/02/DSC5861-scaled-1-900x1359-1.jpg' alt=''/>

    </div>

    <div className='Ab1'> 
      <img className='Ai2' src='https://maitredattier.com/wp-content/uploads/2022/11/Arabesque-02.png' alt=''/>
      <p className='Ap1'>Nos Dattes DEGLET NOUR<br/><br/>
La DEGLET NOUR est une variété de dattes originaires d’Algérie.<br/><br/>

Mielleuse et fondante, sa couleur est claire, dorée et translucide. Elle est particulièrement<br/><br/> riche en apports énergétiques. Ses vertus sont nombreuses.<br/><br/>

Elle n’en reste pas moins une gourmandise appréciée des petits et des grands.<br/><br/>

Maître Dattier vous propose l’authenticité de la datte Deglet Nour, alliée au plaisir<br/> chocolaté, pour un moment unique.</p>
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

export default About