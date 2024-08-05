'use client'
import React from 'react';
import { FaHeartbeat } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import CountUp from 'react-countup';


function Hero():React.ReactElement {
    const router = useRouter();
    
    const handleClick = () => {
        router.push('/sign-up');
    }

  return (
    <>
    <section className="Hero-section bg-gray-200 py-12 xl:pt-12 xl:pb-0 overflow-hidden" id="home">
        <div className="container mx-auto h-full">
            <div className="flex flex-col xl:flex-row items-center justify-between h-full">

                <div className="hero-text xl:w-[48%] text-center xl:text-left">
                    <div className="flex items-center bg-white py-[10px] px-[20px] w-max gap-x-2 mb-[26px] rounded-full mx-auto xl:mx-0">
                    <FaHeartbeat className='text-4xl text-manthis-green' />
                    <div className="uppercase text-base font-medium text-[#9ab4b7] tracking-[2.24px]">Live your best life</div>
                    </div>
                    <h1 className="text-4xl font-semibold mb-6">We care about your health.</h1>
                    <p className=" text-base leading-7 mb-[42px] md:max-w-xl">At Carefinder, we seek is to address the challenges 
                        associated with accessing healthcare in Nigeria by providing 
                        a user-friendly platform that helps users locate, 
                        export, and share information about hospitals in their region.
                        Findling the nearest care has never been easier.</p>
                    <button onClick={handleClick} className='btn px-8 py-4 text-xl font-semibold text-gray-600 border rounded-full bg-manthis-green bg-opacity-40 mx-auto xl:mx-0'>Get Started</button>
                </div>
                <div className="hero-banner hidden xl:flex max-w-[814px] self-end">
                    <img src="/hero-banner.png" alt="hero-banner" />
                </div>
            </div>
        </div>
    </section>

{/* Statistics section */}
<section className='services-section mt-10'>
<div className='container mx-auto '>
<div className=" flex flex-col xl:flex-row gap-y-6 justify-between">
 <div className='flex-1 flex flex-col items-center'>
        <div className="text-4xl xl:text-[64px] font-semibold text-bice-blue text-opacity-50 xl:mb-4 text-">
           <CountUp end={500} duration={2} prefix="+"/></div> 
        <div className=" text-base font-medium text-gray-400 ">Happy patients</div>
    </div>
    <div className='flex-1 flex flex-col items-center'>
        <div className="text-4xl xl:text-[64px] font-semibold text-bice-blue text-opacity-50 xl:mb-4">
        <CountUp end={10} duration={2}/></div>
        <div className=" text-base font-medium text-gray-400">Total Branches</div>
    </div>
    <div className='flex-1 flex flex-col items-center'>
        <div className="text-4xl xl:text-[64px] font-semibold text-bice-blue text-opacity-50 xl:mb-4">
         <CountUp end={20} duration={2} prefix="+"/> 
        </div>
        <div className=" text-base font-medium text-gray-400">Senior Doctors</div>
    </div>
    <div className='flex-1 flex flex-col items-center'>
        <div className="text-4xl xl:text-[64px] font-semibold text-bice-blue text-opacity-50 xl:mb-4">
        <CountUp end={2} duration={2}/> 
        
        </div>
        <div className=" text-base font-medium text-gray-400">Years Experience</div>
    </div>  
    </div>
</div>
</section>


</>
  )
}

export default Hero;