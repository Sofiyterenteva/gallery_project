import React, {useEffect, useState} from "react";
import {List} from "../../components/List/List"
import {Button} from "../../components/Button/Button"
import Image from 'next/image';
import Link from "next/link";

export default function NewPage(){
    let [content, setContent] = useState(null);
    let [value, setValue] = useState("");
    let [page, setPage] = useState(0);
    let [time, setTime] = useState(null);


    function handleClick(e){
        e.preventDefault();
        if(!value)return;
        setContent(lastState => [{title: value}, ...(lastState || []), ]);
        // setConstantValue(lastState => [...lastState, 'I am here']) копирует массив, добавляет элемент в конец массива
        setValue("");
    }

    useEffect(() => {
        console.log("is changed mount");
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(obj => setContent(obj));
        return () => {
            console.log("unmountt")
        };
    }, []);

    useEffect(() => {
        const id = setInterval(() => setTime(new Date().toUTCString()), 1000);
    }, []);

    //https://jsonplaceholder.typicode.com/
    return(
        <div>
            <form onSubmit={handleClick}>
                <Button type="submit" classNameProp={{margin: '5px'}} >Add item</Button>
                <input type="text" onChange={e => setValue(e.target.value)} value={value}  />
                <Button type="button" classNameProp={{margin: '5px'}} onClick={() => setPage(p => p + 1)}>
                    next {page}
                </Button>
            </form>
            
            <span>{time}</span>
            {content && <List content={content?.slice(page * 10, (page + 1) * 10)} />}

            {/* <Image src='/public/cat.jpg' width={50} height={50} alt='cat'/>
            <Link href='./[...id].jsx'>Here</Link> */}

        </div>
    );
}
