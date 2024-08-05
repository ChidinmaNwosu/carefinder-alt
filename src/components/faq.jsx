'use client'
import React,{useState} from 'react'
import { IoMdAdd, IoMdRemove } from "react-icons/io";

function Faq() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <section className="className mt-20" id="faq">
        <div className="container mx-auto">
            <h2 className="text-3xl text-center mb-[50px] font-semibold text-manthis-green">We&apos;ve got answers.</h2>
            <div className="max-w-5xl mx-auto">
                <div className="px-[30px] pt-7 pb-4 border-b cursor-pointer select-none" onClick={toggleOpen}>
                    <div className="flex items-center justify-between mb-[10px]">
                        {/*title */}
                        <h4 className="text-xl">Why you should believe in Carefinder, to find healthcare centers close to you?</h4>
                        {/*icon */}
                        <div className="text-manthis-green text-2xl">
                        {isOpen ? <IoMdRemove /> : <IoMdAdd/> }
                        </div>
                    </div>
                    {/*answer text */}
                    <div className={`transition-height duration-500 ease-in-out ${isOpen ? 'h-auto' : 'h-0 overflow-hidden'}`}>
                        <p className="font-light ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eaque maxime quisquam? Dolor deleniti voluptate ratione ut modi magnam iure voluptas consectetur dolores! Numquam, dolor rerum corporis earum natus dicta.</p>
                    </div>
                </div>

                <div className="px-[30px] pt-7 pb-4 border-b cursor-pointer select-none" onClick={toggleOpen}>
                    <div className="flex items-center justify-between mb-[10px]">
                        {/*title */}
                        <h4 className="text-xl">Will we get healthcare updates?</h4>
                        {/*icon */}
                        <div className="text-manthis-green text-2xl">
                        {isOpen ? <IoMdRemove /> : <IoMdAdd/> }
                        </div>
                    </div>
                    {/*answer text */}
                    <div className={`transition-height duration-500 ease-in-out ${isOpen ? 'h-auto' : 'h-0 overflow-hidden'}`}>
                        <p className="font-light ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eaque maxime quisquam? Dolor deleniti voluptate ratione ut modi magnam iure voluptas consectetur dolores! Numquam, dolor rerum corporis earum natus dicta.</p>
                    </div>
                </div>

                <div className="px-[30px] pt-7 pb-4 border-b cursor-pointer select-none" onClick={toggleOpen}>
                    <div className="flex items-center justify-between mb-[10px]">
                        {/*title */}
                        <h4 className="text-xl">Can I share the list of hospitals closest to me to others? How?</h4>
                        {/*icon */}
                        <div className="text-manthis-green text-2xl">
                        {isOpen ? <IoMdRemove /> : <IoMdAdd/> }
                        </div>
                    </div>
                    {/*answer text */}
                    <div className={`transition-height duration-500 ease-in-out ${isOpen ? 'h-auto' : 'h-0 overflow-hidden'}`}>
                        <p className="font-light ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eaque maxime quisquam? Dolor deleniti voluptate ratione ut modi magnam iure voluptas consectetur dolores! Numquam, dolor rerum corporis earum natus dicta.</p>
                    </div>
                </div>

                <div className="px-[30px] pt-7 pb-4 border-b cursor-pointer select-none" onClick={toggleOpen}>
                    <div className="flex items-center justify-between mb-[10px]">
                        {/*title */}
                        <h4 className="text-xl">How long will it take to get locations of healthcare centers closest to me?</h4>
                        {/*icon */}
                        <div className="text-manthis-green text-2xl">
                        {isOpen ? <IoMdRemove /> : <IoMdAdd/> }
                        </div>
                    </div>
                    {/*answer text */}
                    <div className={`transition-height duration-500 ease-in-out ${isOpen ? 'h-auto' : 'h-0 overflow-hidden'}`}>
                        <p className="font-light ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eaque maxime quisquam? Dolor deleniti voluptate ratione ut modi magnam iure voluptas consectetur dolores! Numquam, dolor rerum corporis earum natus dicta.</p>
                    </div>
                </div>

                <div className="px-[30px] pt-7 pb-4 border-b cursor-pointer select-none" onClick={toggleOpen}>
                    <div className="flex items-center justify-between mb-[10px]">
                        {/*title */}
                        <h4 className="text-xl">What preparations are necessary before going to locations provided by Carefinder?</h4>
                        {/*icon */}
                        <div className="text-manthis-green text-2xl">
                        {isOpen ? <IoMdRemove /> : <IoMdAdd/> }
                        </div>
                    </div>
                    {/*answer text */}
                    <div className={`transition-height duration-500 ease-in-out ${isOpen ? 'h-auto' : 'h-0 overflow-hidden'}`}>
                        <p className="font-light ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eaque maxime quisquam? Dolor deleniti voluptate ratione ut modi magnam iure voluptas consectetur dolores! Numquam, dolor rerum corporis earum natus dicta.</p>
                    </div>
                </div>

                <div className="px-[30px] pt-7 pb-4 border-b cursor-pointer select-none" onClick={toggleOpen}>
                    <div className="flex items-center justify-between mb-[10px]">
                        {/*title */}
                        <h4 className="text-xl">What are the benefits of Carefinder?</h4>
                        {/*icon */}
                        <div className="text-manthis-green text-2xl">
                        {isOpen ? <IoMdRemove /> : <IoMdAdd/> }
                        </div>
                    </div>
                    {/*answer text */}
                    <div className={`transition-height duration-500 ease-in-out ${isOpen ? 'h-auto' : 'h-0 overflow-hidden'}`}>
                        <p className="font-light ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eaque maxime quisquam? Dolor deleniti voluptate ratione ut modi magnam iure voluptas consectetur dolores! Numquam, dolor rerum corporis earum natus dicta.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Faq;