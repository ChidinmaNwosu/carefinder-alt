"use client"
import React, {useState} from 'react'
import { FcGoogle } from "react-icons/fc";
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
import {auth} from '@/app/firebase';

function SignIn():React.JSX.Element{
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  
  const handleGoogleSignIn =async()=>{
    try{
      const provider = new GoogleAuthProvider();
       await signInWithPopup(auth, provider);
       router.push('/hospitals');
    }
    catch(error){
      setError(`Could not sign in with Google: ${error}`);
    }
  }

  const handleSignIn =async()=>{
    try{
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/hospitals');
    }
    catch(error){
      setError(`Could not sign in: ${error}`);
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-bice-blue bg-opacity-40">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md-flex-row md:sapce-y-0 md:space:x-4 lg:space-x-8">
        <div className="flex flex-col justify-center p-4 md:p-8 lg:p-14">
          <span className="mb-1 lg:mb-3 text-2xl md:text-3xl lg:text-4xl font-bold text-bice-blue"> Welcome Back!</span>
            <span className="font-light font-gray-400 mb-8 text-sm md:text-base lg:test-lg text-manthis-green">Welcome back! Please enter your details.</span>
            <div className="py-2 md:py-4 ">
              <label className="text-lg mb:text-xl mb-2 text-bice-blue">Email</label>
              <input onChange={(e)=>setEmail(e.target.value)} type="text" className="w-full p-2 border border-manthis-green rounded-md placeholder:font-light placeholder:text-mathis-green" name="email" id="email" value={email} placeholder="JaneDoe@email.com" />
           </div>
            <div className=" py-2 md:py-4 ">
              <label className="text-lg md:text-xl mb-2 text-bice-blue">Password</label>
              <input onChange={(e)=>setPassword(e.target.value)} type="password" className="w-full p-2 border border-manthis-green rounded-md placeholder:font-light placeholder:text-mathis-green" name="password" id="password" value={password} placeholder="JaneDoe123$" />
           </div>
           <div className="flex flex-col md:flex-row gap-2 justify-between w-full py-4">
               <div className="mr-24 ">
                  <input type="checkbox" className="mr-2" name="check" id="check"/>
                  <span className="text-base text-manthis-green">
                    Remember for 30 days
                  </span>
               </div>
          <span className="text-base text-manthis-green">Forgot Password?</span>
           </div>
           <button onClick={handleSignIn} className="w-full bg-bice-blue text-white p-3 rounded-lg mb-6 hover:bg-white hover:text-bice-blue hover:border hover:border-manthis-green font-semibold">Sign In</button>
           <button onClick={handleGoogleSignIn} className="w-full border border-gray-400 text-bice-blue text-base p-2 rounded-lg mb-6 hover:bg-bice-blue hover:text-white font-semibold"><FcGoogle className=" w-6 h-6 inline mr-2" />Sign In with Google</button>
           {/* <p className="className">{error}</p> */}
           <div className="text-center text-bice-blue">
             Don&apos;t have an account? {''}
              <span onClick={()=>router.push('/sign-up')} className="font-bold text-bice-blue cursor-pointer" >
                Sign up for free
              </span>
           </div>
        </div>
      </div>

    </div>
  )
}

export default SignIn;