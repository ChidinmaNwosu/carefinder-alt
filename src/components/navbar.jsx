"use client"
import React, {useState} from 'react';
import { RxHamburgerMenu } from "react-icons/rx";


function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <header className='py-8 lg:pt-6 lg:pb-6  bg-manthis-green bg-opacity-50'>
            <div className='container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y-0'>
                {/* Logo and Hmaburger Icon */}
                <div className='flex justify-between items-center'>
                <div className='flex justify-center items-center gap-3 lg:justify-normal'>
                    <a href="#">
                        <img src="/carefinder.jpg" alt="carefinder-logo" className='w-[70px] h-[70px] pl-2'/>
                    </a>
                    <p className='text-bice-blue text-2xl font-bold hover:text-manthis-green'>CareFinder</p>
                </div>
                {/* Hamburger Menu */}
                <button aria-label="Toggle-menu"className='lg:hidden text-4xl p-4 text-center' onClick={()=> setIsOpen(!isOpen)}>
                <RxHamburgerMenu />
                </button>
                </div>
                {/* Navigation Links */}
                <div className={`flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0 items-center ${isOpen ? 'block' : 'hidden'} lg:block`}>
                    <a href="#" className='text-bice-blue hover:text-manthis-green text-2xl font-semibold mx-2 lg:mx-4'>Home</a>
                    <a href="#" className='text-bice-blue hover:text-manthis-green text-2xl font-semibold mx-2 lg:mx-4'>About</a>
                    <a to="#" className='text-bice-blue hover:text-manthis-green text-2xl font-semibold mx-2 lg:mx-4'>Services</a>
                    <a href="#" className='text-bice-blue hover:text-manthis-green text-2xl font-semibold mx-2 lg:mx-4'>Blog</a>
                    <a href="#" className='text-bice-blue hover:text-manthis-green text-2xl font-semibold mx-2 lg-mx-4'>Contact Us</a>
                    <a href="#" className='mx-2- lg:mx-4'>
                    <button className='p-3 text-bice-blue bg-white bg-opacity-30 hover:text-manthis-green rounded-lg text-2xl font-semibold border-2 border-white '>Admin Portal</button>
                    </a>
                </div>
            </div>
        </header>
    </div>
  )
}

export default NavBar;