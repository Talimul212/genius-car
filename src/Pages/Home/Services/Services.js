import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const[services,setServices]=useState([]);
    
    
    useEffect(()=>{
        fetch('https://genius-car-server-silk.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[]);



    return (
       <div>
         <div className='text-center mb-4'>
            <p className='text-2xl font-bold text-orange-600 '>Services</p>
        <h2 className='text-5xl font-semibold my-5'>Our Service Area</h2>
        <p className='text-gray-600'>the majority have suffered alteration in some form, by injected humour, or randomised <br/> words which don't look even slightly believable. </p>
        </div>
        <div className='grid gap-8 grid-col-1 md:grid-cols-2 lg:grid-cols-3 '>
         {
            services.map(service=><ServicesCard key={service._id} service={service}></ServicesCard>)
         }
        </div>
       </div>
    );
};

export default Services;