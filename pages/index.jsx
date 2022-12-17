import React from 'react';
import css from '../styles/PicturePage.module.css'
import {Button} from '../components/Button/Button'
import { Gallery } from '../components/Gallery/Gallery';
import {useEffect, useState} from "react";

export default function PicturePage(){
    let [value, setValue] = useState('Введите url картинки');
    let [images, setImages] = useState(null);
    let [page, setPage] = useState(0);
  
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(obj => setImages(obj));
            }, []);    
            
            
            var http = require('http');
              

    return (
    <div className={css.mainContent}>
        <form className={css.formTop}>
            <Button type='submit' classNameProp={{margin: '5px'}}>Add picture</Button>
            <input type='text' name="enterId" className={css.inputId}></input>
            <Button type='submit' classNameProp={{marginLeft: '5px'}}>Prev</Button>
            <Button type='submit'>Next</Button>
            {images && <Gallery images={images?.slice(page * 10, (page + 1) * 10)}/>}
        </form>
    </div>
)}