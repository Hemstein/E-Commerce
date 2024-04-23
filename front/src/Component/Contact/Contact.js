import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div className='ContactForm'>
      <div className='container123'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form id='contact-form' >
                {/* Row 1 of form */}
                <div className='row formRow'>
                  <div className='col-6'>
                    <input
                      type='text'
                      name='name'
                      
                          
                     
                   
                  
                      className='form-control formInput'
                      placeholder='Nom'
                    ></input>
                  
                  </div>
                  <div className='col-6'>
                    <input
                      type='email'
                      name='email'
                      
                   
                      className='form-control formInput'
                      placeholder='E-mail'
                    ></input>
                    
                     
                   
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='text'
                      name='subject'
                     
                      
                      className='form-control formInput'
                      placeholder=' Adresse'
                    ></input>
                    
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <textarea
                      rows={3}
                      name='Delivery address (details matter)'
                     
                      className='form-control formInput'
                      placeholder='Votre message'
                    ></textarea>
                    
                  </div>
                </div>

                <button className='submit-btn'  type='submit'>
                 Envoyer
                </button>
              </form>
            </div>
           
          </div>
        </div>
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
)}

export default Contact