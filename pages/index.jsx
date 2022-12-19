import React from 'react';
import css from '../styles/PicturePage.module.css'
import {Button} from '../components/Button/Button'
import { Gallery } from '../components/Gallery/Gallery';
import {useEffect, useState} from "react";
import Image from 'next/image';


export default function PicturePage(){
    let [value, setValue] = useState('Введите url картинки');
    let [images, setImages] = useState(null);
    let [page, setPage] = useState(0);
    

    function onClick(){
        setPage(p => p + 1);
    }
    
    function onClickBack(){
        setPage(p =>  p - 1)
    }
    

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(obj => setImages(obj));
            }, []);    
               

    return (
    <div className={css.mainContent}>
        <form className={css.formTop}>
            <Button type='submit' classNameProp={{margin: '5px'}}>Add picture</Button>
            <input type='text' name="enterId" className={css.inputId}></input>
            
            <div className={css.picture_selection}>
            <Button classNameProp={{display: 'flex', width: '60px', height: '60px', marginLeft: '5px'}} onClick={onClickBack} type='button' >
                <Image src='/arrow_l.png' width={50} height={50} alt='image'/>
            </Button>
           
            
            {images && <Gallery images={images?.slice(page * 5, (page + 1) * 5)} />}

            <Button classNameProp={{display: 'flex', width: '60px', height: '60px', marginRight: '5px'}} onClick={onClick} type='button'>
                <Image src='/arrow_r.png' width={50} height={50} alt='image'/>    
            </Button>
            </div>
            <span>Надпись столько/из и title</span>
            <p>Страница {page < 0 ? page + 1001 : page + 1}</p>
        </form>
      
    </div>
)}