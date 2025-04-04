import React, { useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';


const Hotjobs = () => {
    const [jobs, setJobs]= useState([]);
    console.log(jobs, 'fdfasdlkfajsdlfajs;dflajskdfl;as');

    useEffect(() =>{
        fetch('http://localhost:5000/jobs')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    }, [])
    return (
        <div className='mt-10 max-w-6xl mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
            {
                jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
            }
        </div>
        </div>
    );
};

export default Hotjobs;