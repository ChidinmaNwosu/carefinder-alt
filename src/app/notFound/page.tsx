import React from 'react'
import Image from 'next/image'; 

function NotFound():React.JSX.Element {
  return (
    <div className="min-h-screen">
     <div className="">
        <div className="flex flex-col items-center justify-center">
            <Image src={"/not-found.png"} alt="Not Found" width={500} height={500} className="w-screen h-screen"/>
        </div>
        <div className="flex flex-col items-center justify-center">
        <h1 className="xl:text-6xl text-center font-bold text-gray-800">404</h1>
        <h2 className="xl:text-4xl text-center font-bold text-gray-800">Page Not Found</h2>
        <p className="text-lg text-center text-gray-600">The page you&apos;re looking for doesn&apos;t exist.</p>
        <a href="/" className="text-lg text-manthis-green hover:text-bice-blue">Return to Homepage</a>

        </div>
   
     </div>
    </div>
  )
}

export default NotFound;