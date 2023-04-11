import React from "react";
import background from '../../assets/images/karap.jpg'
import './style.scss'
function Section(){
    
      return <section>
        <div className='section1' style={{backgroundImage:`url('${background}')`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%"}}>
        <div className="section1-buttons">
        <input/>
        <button>D</button>
        </div>
        </div>
      </section>
    }
  
  
  export default Section