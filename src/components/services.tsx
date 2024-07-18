import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

function Services() {
  return (
    <>
    <section className='services-section mb-20'>
        <div className="bg-bice-blue bg-opacity-30 bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative h-[368px] flex items-center xl:items-start -z-10">
          <div className="container mx-auto">
            <div className="flex flex-col items-center xl:flex-row xl:mb-[60px]">
              <h2 className="text-3xl font-semibold text-white flex-1 mb-4 xl:mb-0 text-center xl:text-left">Our Best Services For Your Solution</h2>
              <p className=" text-base text-white flex-1 text-center xl:text-left max-w-2xl xl:max-w-none">Carefinder is dedicated to making healthcare accessible and efficient for users across Nigeria. 
                  By connecting you to services such as consultaion, emergency checkup, pregnancy care, pharmaceutical care,
                   nutritional care, and cardiology nearest to you,
                   making healthcare easily accessible.</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-8 xl:-mt-[144px]">
          <div className="grid xl:grid-cols-4 gap-5 px-8 xl:px-0 ">

            <div className="service-item bg-white p-[30px] rounded-[10px] shadow-2xl min-h-[288px] flex flex-col items-center text-center">
              <div className="grid-item-icon mb-[15px]">
                <img src="/icon-2.png" alt="medical-icon" />
              </div>
              <h3 className="text-xl font-semibold mb-[10px]">Consultaion and Emergency Checkup</h3>
              <p className="description font-light leading-normal max-w-[300px]">Carefinder&apos;s general consultation services are designed to provide users with easy access to medical advice and routine checkups</p>
                </div>

            <div className="service-item bg-white p-[30px] rounded-[10px] shadow-2xl min-h-[288px] flex flex-col items-center text-center">
              <div className="grid-item-icon mb-[15px]">
                <img src="/pills.png" alt="medical-icon" className='w-[60px] h-[60px] mb-[5px]'/>
              </div>
              <h3 className="text-xl font-semibold mb-[10px]">Pregnancy care</h3>
              <p className="description font-light leading-normal max-w-[300px]">Carefinder&apos;s Pregnancy care services are designed to assist expectant mothers in navigating their pregnancy journey with ease and confidence. </p>
                 </div>

              <div className="service-item bg-white p-[30px] rounded-[10px] shadow-2xl min-h-[288px] flex flex-col items-center text-center">
              <div className="grid-item-icon mb-[15px]">
                <img src="/pregnancy.png" alt="medical-icon" className='w-[60px] h-[60px] mb-[5px]'/>
              </div>
              <h3 className="text-xl font-semibold mb-[10px]">Pharmaceutical care and Nutrition</h3>
              <p className="description font-light leading-normal max-w-[300px]">Carefinder&apos;s pharmaceutical care services aim to enhance medication management
                 and ensure patients receive the best possible pharmaceutical support.
                They also focus on promoting healthy eating habits and providing personalized dietary advice.</p>
                 </div>

              <div className="service-item bg-white p-[30px] rounded-[10px] shadow-2xl min-h-[288px] flex flex-col items-center text-center">
              <div className="grid-item-icon mb-[15px]">
                <img src="/icon-4.png" alt="medical-icon" />
              </div>
              <h3 className="text-xl font-semibold mb-[10px]">Cardiology</h3>
              <p className="description font-light leading-normal max-w-[300px]">Carefinder offers comprehensive
                 cardiology services to support patients with heart-related 
                 conditions and promote cardiovascular health.</p>
              </div>
            </div>
          </div>
    </section>

    {/*Appointments*/}
    <section className="appointment-section p-4">
      <div className="container mx-auto">
        <h2 className="text-3xl mb-5 xl:mb-[50px] text-center xl:text-left font-semibold">Book an Appointment or Call: <span className="text-bice-blue opacity-45">(+234)909 411 5467</span></h2>

        {/*form*/}
       <form className="flex flex-col gap-y-5 border shadow-2xl p-10">
        {/*select wrapper */}
        <div className="flex flex-col xl:flex-row gap-5">
          <div className="relative items-center border bg-white select-text flex-1 rounded-lg">
            {/*select 1 */}
            <select className=" outline-none h-full w-full bg-transparent p-4">
              <option value="1">Select Service</option>
              <option value="2">Service 1</option>
              <option value="3">Service 2</option>
              <option value="4">Service 3</option>
              <option value="5">Service 4</option>
            </select>
          </div>

          {/*select 2*/}
          <div className="relative items-center border bg-white select-auto flex-1 rounded-lg">
            <select className="outline-none h-full w-full bg-transparent p-4">
              <option value="1">Select Day</option>
              <option value="2">Monday</option>
              <option value="3">Tuesday</option>
              <option value="4">Wednesday</option>
              <option value="5">Thursday</option>
              <option value="5">Friday</option>
              <option value="5">Saturday</option>
              <option value="5">Sunday</option>
            </select>
          </div>
     </div>
     <div className="flex flex-col xl:flex-row gap-5">
           <input type="text" className="input flex-1 p-3 border rounded-lg outline-none" placeholder="Full Name" />
           <input type="tel" className="input flex-1 p-3 border rounded-lg outline-none" placeholder="Phone Number" />
      </div>
     <div className="flex flex-col xl:flex-row gap-5">
           <input type="date" className="input flex-1 p-3 border rounded-lg outline-none"/>
           <input type="time" className="input flex-1 p-3 border rounded-lg outline-none" />
      </div>

      {/*submit button*/}
      <button type="submit" className="border rounded-full bg-manthis-green bg-opacity-55 self-start xl:self-center p-8 text-xl font-semibold text-white mt-10">BOOK AN APPOINTMENT</button>
     
       </form>
      </div>
    </section>

</>
  )
}

export default Services