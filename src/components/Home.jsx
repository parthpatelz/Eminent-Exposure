import React from 'react';
import { useEffect, useState,useRef } from 'react';
import home from '../assets/home.jpg';
let name = 'Photographer...'
const Home = () => {
    const [text,setText] = useState('');
    const ref = useRef(0)

    useEffect(()=>{
        const interval = setInterval(() => {
             if(ref.current < name.length){
                 ref.current++;
                 setText(()=>text + name[ref.current-1])
             }       
        }, 200);
        return () => clearInterval(interval);
    },[text])

    return (
        <div className="relative flex items-center justify-center h-screen">
            <img className="object-cover w-full h-full" src={home} alt="Home Image"/>
            <div className="absolute text-white text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">Looking for a wedding&nbsp;</h1><span className='text-zinc-950 text-4xl md:text-5xl lg:text-6xl font-extrabold'>{text}</span>
            </div>
        </div>
    )
}

export default Home