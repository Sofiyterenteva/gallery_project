import React from 'react';
import css from '../style/PicturePage.module.css'
import {Button} from '../components/Button/Button'
import { Gallery } from '../components/Gallery/Gallery';
import {useEffect, useState} from "react";
import Image from 'next/image';

export default function PicturePage(){
    let [value, setValue] = useState('');
    let [images, setImages] = useState(null);
    let [page, setPage] = useState(0);
    
    function handleClick(e){
        e.preventDefault();
        if(!value)return;
        setImages(lastState => [{url: value, }, ...(lastState || []), ]);
        // setConstantValue(lastState => [...lastState, 'I am here']) копирует массив, добавляет элемент в конец массива
        setValue("");
    }


    function onClick(){
        setPage(prevCount => prevCount + 1);
    }
    
    function onClickBack(){
        setPage(prevCount => prevCount - 1);
    }
    

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(obj => setImages(obj));
            }, []);    
               

    return (
    <div className={css.mainContent} onSubmit={handleClick}>
        <form className={css.formTop} >

            <div className={css.header}>
            
            <Button classNameProp={{display: 'flex', width: '40px', height: '40px'}} onClick={onClickBack} type='button' >
                <Image src='/arrow_l.png' width={30} height={30} alt='image'/>
            </Button>

            <Button type='submit' classNameProp={{margin: '5px'}}>Add picture</Button>
            <input type='text' 
                   name="enterId" 
                   className={css.inputId} 
                   onChange={e => setValue(e.target.value)}
                   value={value}
                   placeholder='Enter image url'>

            </input>

            <Button classNameProp={{display: 'flex', width: '40px', height: '40px'}} onClick={onClick} type='button'>
                <Image src='/arrow_r.png' width={30} height={30} alt='image'/>    
            </Button>
            </div>

            <div className={css.picture_selection}>
           
            
            {images && <Gallery images={images?.slice(page * 5, (page + 1) * 5)} />}

            </div>
            <div className={css.description}>
                <p>Страница {page < 0 ? page - 1 : page + 1}</p>
            </div>
        </form>
      
    </div>
)}







