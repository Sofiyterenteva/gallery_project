import React from 'react'
import css from './Gallery.module.css'
import Image from 'next/image'

export let Gallery = ({children, images}) => 
{
    return(
        <div>{images.map((el,i)=>(
        <Image className={css.picture} key={i} src={el.url} alt='image' width={500} height={500}/>
        ))}</div>
    )
}



  {/* <div key={i}>{el.url}</div> */}
