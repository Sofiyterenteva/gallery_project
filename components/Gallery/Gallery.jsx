import React from 'react'
import css from './Gallery.module.css'
import {useEffect, useState} from "react";


export let Gallery = ({images}) => 
{
    const [curr, setCurr] = useState(images[0]);
    

    useEffect(() => {
        setCurr(images[0]);
    }, [images[0]]);

    return(
        <div>
            <img className={css.main_image} src={curr.url} alt='image'/>
            <div className={css.box}>       
        
                {images.map((el,i)=>(
                <img className={css.picture} key={i} src={el.url} alt='image' onClick = {e => setCurr({url: e.target.src}) } />
            ))}
            </div>
        </div>
    );  
};



