import React from 'react';
import tool from "../../3.png";
 import "./product.style.css";

export const Product =()=>{
    return(
        <div className="product">
  <div className="heading">
            <p>
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
            </p>
          </div> 
          <img
           alt='C.R.I'
           src={tool}
        />
        <div className="last">
        <p>
     Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors 
            </p>
        </div>
     
        </div>
               
    )
}