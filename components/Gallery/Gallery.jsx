import React from 'react'
import css from './Gallery.module.css'
import {useState} from "react";


export let Gallery = ({images}) => 
{
    const [curr, setCurr] = useState(images[0]);
    
    return(
        
        <div className={css.main_image}>
            <img  src={curr.url} alt='image'/>
            <div className={css.box}>       
        
                {images.map((el,i)=>(
                <img className={css.picture} key={i} src={el.url} alt='image' onClick = {e => setCurr(e.target.src) } />
            ))}
            </div>
        </div>
    )   
}



