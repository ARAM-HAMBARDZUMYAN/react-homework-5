import React from "react";
import './style.scss'
  function  Footer() {
      return <footer>
      <div className="container">
          <div className="left section" style={{width:"32%"}}>
              <h2>Contact</h2>

              <p>+123 45 6789012<br/>
              <a href="#">email@domain.com</a><br/>
              <br/>
              234 Hidden Pond Road, Ashland City, TN 37015</p>
          </div>

          <div className="center section" style={{width:"18%"}}>
              <h2>Our Links</h2>
               <div className="social">
               <ul>
               <li>
                  <a href="#">Advertise</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Our Company</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                  </ul>
              </div>
          </div>

          <div className="right section" style={{width:"50%"}}>
              
          </div>
      </div>

   
        
              
              <div><p className="text-right">Copyright 2045 Catalog-Z Company. All rights reserved.</p></div>
      
  </footer>
    }


export default Footer