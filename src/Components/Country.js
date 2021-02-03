import axios from 'axios'

import React, { useEffect, useState } from 'react'




function Planets(){
    const url ="https://restcountries.eu/rest/v2/all"
    
    const [planet,setPlanet]=useState()
    let content =null;
    
    
    useEffect(()=>{
        axios.get(url)
        .then(response=>{

            setPlanet(response.data)
        })

    },[url])
    
    
    
    if(planet){
     content=   
     <div>
  <li> {planet[5].name}</li>

     </div>
    }

    return(
        <div>
          {content}

        </div>
    
     )
    }
    

export default Planets;