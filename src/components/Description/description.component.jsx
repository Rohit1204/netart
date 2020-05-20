import React from 'react';
import award from "../../1.png";
import achieve from "../../2.png";

import "./description.style.css";

export const Description =()=>{
    return(
        <div className="main">
            <div className="image">
            <img
           alt='medal'
           src={award}
        />
            </div>
            <div className="about">
                <h2> 
                    C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2019 For the 4th time.
                </h2>
                <div className="list">
                <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                <li> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                </div>
            </div>
            <div className="achievement">
            <img
           alt='achieve'
           src={achieve}
           />
           <p>Government of India has awarded the <span>"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
            </div>
            
          </div>         
    )
}