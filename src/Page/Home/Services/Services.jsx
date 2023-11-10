import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, SetServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => SetServices(data))
    }, [])
    return (
        <div className='mx-auto space-y-5'>
            <h2 className='text-primary font-bold text-2xl text-center'>Services</h2>
            <h1 className='text-6xl font-bold text-center'>Our Service Area</h1>
            <p className='text-center'>the majority have suffered alteration in some form, by injected humour, or randomised<br></br> words which don&#39;t look even slightly believable. </p>
            
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
               
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className='text-center p-5'>
                <button className='btn btn-primary btn-outline'>More Services</button>
            </div>
        </div>
    );
};

export default Services;