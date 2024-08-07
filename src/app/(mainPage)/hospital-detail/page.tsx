// // "use client";
// // import React, { useState, useEffect } from "react";
// // import { FaSearch } from "react-icons/fa";
// // import axios from "axios";
// // import { Hospital } from "./interface";
// // import Papa from "papaparse";

// // function Hospitals():React.JSX.Element {
// //   const [searchQuery, setSearchQuery] = useState<string>("");
// //   const [hospitals, setHospitals] = useState<Hospital[]>([]);

// //   //Using useState to set pagination for my hospitals, 12 hospitals per page
// //   const [pagination, setPagination] = useState<number>(1);
// //   const hospitalsPerPage = 12;

// // useEffect(() => {
// //     // Fetch hospitals from our endpoint
// // axios
// //       .get(
// //         "https://getreliancehealth.com//wp-content/themes/getreliancehealthWPTheme/assets/cache/providers.json"
// //       )
// //       .then((response) => {
// //         setHospitals(response?.data?.data);
// //          console.log("data", response?.data);
// //       })
// //       .catch((error) => {
// //         console.error(
// //           "There was an error fetching the hospital data: " + error
// //         );
// //       });
// //   }, []);

// // //Allows us to set pagination for our list of hospitals
// //   const startIndex = (pagination-1) * hospitalsPerPage;
// //   const endIndex = startIndex + hospitalsPerPage;
// //   const currentHospitals = hospitals
// //             .filter(hospital => hospital.name.toLowerCase().includes(searchQuery.toLowerCase()))
// //             . slice(startIndex, endIndex);

// //             const handleNextPage = () => {
// //               if (endIndex < hospitals.length){
// //               setPagination(pagination + 1);
// //               }
// //             };

// //             const handlePreviousPage = () => {
// //               if (pagination > 1){
// //                 setPagination(pagination - 1);
// //               }
// //             };


// // //Allows us to export our list of hospitals to a CSV file, after filtering it based on location 
// //   const exportToCSV = () => {
// //     const filteredHospitals = hospitals.filter(hospital =>
// //       hospital.name.toLowerCase().includes(searchQuery.toLowerCase())
// //     ); 
      
// // // Transforming the data to CSV format based on the location
// //     const csvData = filteredHospitals.map(hospital => ({ 
// //     Name: hospital?.name,
// //     State: hospital?.state?.name,
// //     Address: hospital?.address,
// //     PhoneNumber: hospital?.phone_number,
// //     Email:`${hospital?.name}@gmail.com`,
// //    }));

// // // Using PapaParse to convert the data
// //    const csv = Papa.unparse(csvData);
// //    const blob = new Blob ([csv], {type: "text/csv;charset=utf-8;"});
// //    const link = document.createElement("a");
// //    const url = URL.createObjectURL(blob);
// //    link.setAttribute("href", url);
// //    link.setAttribute("download", "hospitals.csv");
// //    link.style.visibility = "hidden";
// //    document.body.appendChild(link);
// //    link.click();
// //    document.body.removeChild(link);
// //   };

// //   return (

// //     <div className="p-4 min-h-screen">
// //       <h1 className="md:text-4xl text-3xl font-bold mb-4 ml-2">Carefinder</h1>
// //       <p className="mb-8 ml-3 text-xl">
// //         Find the best hospitals near you! Search and filter through a
// //         comprehensive list of hospitals using the hospital name or location.
// //       </p>

// //       <form className="md:w-[700px] w-[300px] pr-2 mb-10 relative ">
// //         <div className="relative ml-2">
// //           <input
// //             type="text"
// //             placeholder="Enter location here"
// //             className="w-full p-4 rounded-full bg-bice-blue bg-opacity-40 placeholder:text-white outline-none"
// //             value={searchQuery}
// //             onChange={(e) => setSearchQuery(e.target.value)}
// //           />
// //           <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-bice-blue rounded-full">
// //             <FaSearch className="text-white" />
// //           </button>
// //         </div>
// //         {/* <div className="absolute top-20 p-4 bg-bice-blue bg-white text-bice-blue w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2 "></div> */}
// //       </form>

// //       <div className=" lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-8 mx-4 my-6 space-y-8 lg:space-y-0 ">
// //         {currentHospitals
// //           ?.filter((hospital) =>
// //             hospital.name.toLowerCase().includes(searchQuery.toLowerCase())
// //           )
// //           .map((hospital: Hospital) => (
// //             <div
// //               key={hospital?.id}
// //               className="p-4 bg-manthis-green bg-opacity-40 text-white rounded-xl"
// //             >
// //               <h2 className="text-2xl font-bold mb-4">{hospital?.name}</h2>
// //               <p className="mb-2 text-bice-blue font-medium tracking-tight text-xl">State: {hospital?.state?.name}</p>
// //               <p className="mb-2 text-bice-blue font-medium tracking-tight text-xl">Address: {hospital?.address}</p>
// //               <p className="mb-2 text-bice-blue font-medium tracking-tight text-xl">Phone number: {hospital?.phone_number}</p>
// //               <p className="mb-2 text-bice-blue font-medium tracking-tight text-xl"> Email: {hospital?.name}@gmail.com</p>
// //             </div>
// //           ))}
// //       </div>

// //       <div className="flex justify-center items-center gap-4 mt-4">
// //         <button onClick={handlePreviousPage} disabled={pagination === 1} className="px-4 py-2 bg-bice-blue text-2xl text-white rounded-full">
// //           Prev
// //         </button>
// //         <button onClick={handleNextPage} disabled={endIndex >= hospitals.length} className="px-4 py-2 bg-bice-blue text-2xl text-white rounded-full">
// //           Next
// //         </button>
// //       </div>
      
// //     {/*A button that allows us to export to CSV file*/}
// //     <div className="flex items-center justify-center mt-10">
// //     <button onClick={exportToCSV} className="px-4 py-2 bg-bice-blue text-2xl text-white rounded-full">
// //           Export to CSV
// //     </button>
// //     </div>
// //    </div>
// //   );
// // }

// // export default Hospitals;



// // 'use client'
// // import { useMemo, useEffect } from "react";
// // import { usePathname, useRouter } from "next/navigation";


// // const HashElement: React.FC = () => {
// //   const router = usePathname();
// //   const path = useRouter();
  

// //   const hashElement = useMemo<HTMLElement | null>(() => {
// //     const hash = router.split('#')[1];
    
// //     const removeHashCharacter = (str: string) => {
// //       return str.slice(1);
// //     };
    
// //     if (hash) {
// //       const element = document.getElementById(removeHashCharacter(hash));
// //       return element;
// //     } else {
// //       return null;
// //     }
// //   }, [router]);

// //   useEffect(() => {
// //     if (hashElement) {
// //       hashElement.scrollIntoView({ behavior: "smooth" });
// //     }
// //   }, [hashElement]);

// //   return null;
// // };

// // export default HashElement;





// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { supabase } from "@/lib/supabaseClient";
// import { FcGoogle } from "react-icons/fc";

// function SignUp(): React.JSX.Element {
//   const router = useRouter();
//   const [name, setName] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [error, setError] = useState<string>("");

//   const handleSignUp = async (): Promise<void> => {
//     try {
//       const {error,data} = await supabase.auth.signUp({
//         email,
//         password,
//       });

//       if (error){
//         throw error;
//       } else{
//         console.log("User signed up:", data.user);
//       }
//       router.push("/hospitals");
//     } catch (error) {
//       setError(`Could not sign up: ${error}`);
//     }
//   };

//   const handleGoogleSignIn = async (): Promise<void> => {
//     try {
//       const {data, error} = await supabase.auth.signInWithOAuth({
//         provider: 'google',
//       });
//       if (error){
//         throw error;
//       } else {
//         console.log("User signed in with Google:", data.user);
//       }
//       router.push("/hospitals");
//     } catch (error) {
//       setError(`Could not sign in with Google: ${error}`);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-bice-blue bg-opacity-40">
//       <div className="relative lg:w-[65%] flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:space-x-4 lg:space-x-8">
//         <div className="flex flex-col justify-center p-4 md:p-8 lg:p-14">
//           <span className="mb-1 lg:mb-3 text-2xl md:text-3xl lg:text-4xl font-bold text-bice-blue">
//             Are You New Here?
//           </span>
//           <span className="font-light font-gray-400 mb-8 text-sm md:text-base lg:text-lg text-manthis-green">
//             Put in your details to join us!
//           </span>
//           <div className="py-2 md:py-4">
//             <label className="text-lg mb:text-xl mb-2 text-bice-blue">
//               Name
//             </label>
//             <input
//               onChange={(e) => setName(e.target.value)}
//               type="text"
//               className="w-full p-2 border border-manthis-green rounded-md placeholder:font-light placeholder:text-mathis-green"
//               name="name"
//               id="name"
//               value={name}
//               placeholder="Jane Doe"
//             />
//           </div>
//           <div className="py-2 md:py-4">
//             <label className="text-lg mb:text-xl mb-2 text-bice-blue">
//               Email
//             </label>
//             <input
//               onChange={(e) => setEmail(e.target.value)}
//               type="text"
//               className="w-full p-2 border border-manthis-green rounded-md placeholder:font-light placeholder:text-mathis-green"
//               name="email"
//               id="email"
//               value={email}
//               placeholder="JaneDoe@email.com"
//             />
//           </div>
//           <div className="py-2 md:py-4">
//             <label className="text-lg md:text-xl mb-2 text-bice-blue">
//               Password
//             </label>
//             <input
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               className="w-full p-2 border border-manthis-green rounded-md placeholder:font-light placeholder:text-mathis-green"
//               name="password"
//               id="password"
//               value={password}
//               placeholder="JaneDoe123$"
//             />
//           </div>
//           <div className="flex flex-col md:flex-row gap-2 justify-between w-full py-4">
//             <div className="mr-24">
//               <input type="checkbox" className="mr-2" name="check" id="check" />
//               <span className="text-base text-manthis-green">
//                 Remember for 30 days
//               </span>
//             </div>
//             <span className="text-base text-manthis-green">
//               Forgot Password?
//             </span>
//           </div>
//           <button
//             onClick={handleSignUp}
//             className="w-full bg-bice-blue text-white p-3 rounded-lg mb-6 hover:bg-white hover:text-bice-blue hover:border hover:border-manthis-green font-semibold"
//           >
//             Sign Up
//           </button>
//           <button
//             onClick={handleGoogleSignIn}
//             className="w-full border border-gray-400 text-bice-blue text-base p-2 rounded-lg mb-6 hover:bg-bice-blue hover:text-white font-semibold"
//           >
//             <FcGoogle className="w-6 h-6 inline mr-2" />
//             Sign Up with Google
//           </button>
//           <div className="text-center text-bice-blue">
//             Already have an account?{" "}
//             <span
//               onClick={() => router.push("/sign-in")}
//               className="font-bold text-bice-blue cursor-pointer"
//             >
//               Go back to Sign In
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignUp;


// //   return (
// //     <div className="flex items-center justify-center min-h-screen  bg-bice-blue bg-opacity-40">
// //       <div className="relative lg:w-[65%] flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md-flex-row md:sapce-y-0 md:space:x-4 lg:space-x-8">
// //         <div className="flex flex-col justify-center p-4 md:p-8 lg:p-14">
// //           <span className="mb-1 lg:mb-3 text-2xl md:text-3xl lg:text-4xl font-bold text-bice-blue">
// //             {" "}
// //             Are You New Here?
// //           </span>
// //           <span className="font-light font-gray-400 mb-8 text-sm md:text-base lg:test-lg text-manthis-green">
// //             Put in your details to join us!
// //           </span>
// //           <div className="py-2 md:py-4 ">
// //             <label className="text-lg mb:text-xl mb-2 text-bice-blue">
// //               Name
// //             </label>
// //             <input
// //               onChange={(e) => setName(e.target.value)}
// //               type="text"
// //               className="w-full p-2 border border-manthis-green rounded-md placeholder:font-light placeholder:text-mathis-green"
// //               name="name"
// //               id="name"
// //               value={name}
// //               placeholder="Jane Doe"
// //             />
// //           </div>
// //           <div className="py-2 md:py-4 ">
// //             <label className="text-lg mb:text-xl mb-2 text-bice-blue">
// //               Email
// //             </label>
// //             <input
// //               onChange={(e) => setEmail(e.target.value)}
// //               type="text"
// //               className="w-full p-2 border border-manthis-green rounded-md placeholder:font-light placeholder:text-mathis-green"
// //               name="email"
// //               id="email"
// //               value={email}
// //               placeholder="JaneDoe@email.com"
// //             />
// //           </div>
// //           <div className=" py-2 md:py-4 ">
// //             <label className="text-lg md:text-xl mb-2 text-bice-blue">
// //               Password
// //             </label>
// //             <input
// //               onChange={(e) => setPassword(e.target.value)}
// //               type="password"
// //               className="w-full p-2 border border-manthis-green rounded-md placeholder:font-light placeholder:text-mathis-green"
// //               name="password"
// //               id="password"
// //               value={password}
// //               placeholder="JaneDoe123$"
// //             />
// //           </div>
// //           <div className="flex flex-col md:flex-row gap-2 justify-between w-full py-4">
// //             <div className="mr-24 ">
// //               <input type="checkbox" className="mr-2" name="check" id="check" />
// //               <span className="text-base text-manthis-green">
// //                 Remember for 30 days
// //               </span>
// //             </div>
// //             <span className="text-base text-manthis-green">
// //               Forgot Password?
// //             </span>
// //           </div>
// //           <button
// //             onClick={handleSignUp}
// //             className="w-full bg-bice-blue text-white p-3 rounded-lg mb-6 hover:bg-white hover:text-bice-blue hover:border hover:border-manthis-green font-semibold"
// //           >
// //             Sign Up
// //           </button>
// //           <button
// //             onClick={handleGoogleSignIn}
// //             className="w-full border border-gray-400 text-bice-blue text-base p-2 rounded-lg mb-6 hover:bg-bice-blue hover:text-white font-semibold"
// //           >
// //             <FcGoogle className=" w-6 h-6 inline mr-2" />
// //             Sign Up with Google
// //           </button>
// //           <div className="text-center text-bice-blue">
// //             Already have an account? {""}
// //             <span
// //               onClick={() => router.push("/sign-in")}
// //               className="font-bold text-bice-blue cursor-pointer"
// //             >
// //               Go back to Sign In
// //             </span>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
//  }

// export default SignUp;



// import React, { useState } from "react";
// // import { FcGoogle } from "react-icons/fc";
// // import { useRouter } from "next/navigation";
// import { supabase } from "@/lib/supabaseClient";

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     error: "",
//   });
// //  const router = useRouter();


//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission logic
//     console.log(formData);
//   };

//   async function signUp(email: string, password: string) {
//     const { data, error } = await supabase.auth.signUp({
//       email: email,
//       password: password,
//     });

//     if (error) {
//       console.error("Error signing up:", error.message);
//     } else {
//       console.log("User signed up:", data.user);
//     }
//   }

//   signUp("user@example.com", "password123");

//   const handleGoogleSignUp = async () => {
//     const { error } = await supabase.auth.signInWithOAuth({
//       provider: "google",
//     });

//     if (error) {
//       console.error("Error signing up with Google:", error.message);
//       // Optionally, handle error here (e.g., show a message to the user)
//     } else {
//       console.log("Google sign-up initiated");
//       // Optionally, handle successful initiation here
//     }
//   };

// return (
//   <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
//     <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
//       <h2 className="text-[2.5rem] font-bold mb-6 text-center">Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label
//             className="block text-lg font-medium text-gray-700 mb-3"
//             htmlFor="username"
//           >
//             Username
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-lg font-medium text-gray-700 mb-3"
//             htmlFor="email"
//           >
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-lg font-medium text-gray-700 mb-3"
//             htmlFor="password"
//           >
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 "
//         >
//           Sign Up
//         </button>
//         <div className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mt-4 flex justify-center">
//           <button
//             onClick={handleGoogleSignUp}
//             className="flex items-center bg-blue-500 text-white rounded hover:bg-blue-600"
//           >
//             <img
//               src="./icons8-google-48.png"
//               alt="Google Icon"
//               className="w-6 h-6 mr-2"
//             />
//             Sign up with Google
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>
// );
// };

// export default SignUp;




"use client"
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { useRouter } from 'next/navigation';
import {auth} from '@/app/firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider,signInWithPopup } from 'firebase/auth';

const SignUp:React.FC = () => {
  const router = useRouter();
  const [name,setName]= useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  

  const handleSignUp=async()=>{
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push ('/about')
    }
    catch (error) {
      setError(`Could not sign up: ${error}`);
    }
  }

  const handleGoogleSignIn = async () => {
    try{
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push('/about')
    }
    catch (error) {
      setError(`Could not sign in with Google: ${error}`);
    }

  }

  
  return (
    <div className="flex items-center justify-center min-h-screen  bg-bice-blue bg-opacity-40">
      <div className="relative lg:w-[65%] flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md-flex-row md:sapce-y-0 md:space:x-4 lg:space-x-8">
        <div className="flex flex-col justify-center p-4 md:p-8 lg:p-14">
          <span className="mb-1 lg:mb-3 text-2xl md:text-3xl lg:text-4xl font-bold text-bice-blue"> Are You New Here?</span>
            <span className="font-light font-gray-400 mb-8 text-sm md:text-base lg:test-lg text-manthis-green">Put in your details to join us!</span>
            <div className="py-2 md:py-4 ">
              <label className="text-lg mb:text-xl mb-2 text-bice-blue">Name</label>
              <input onChange={(e)=>setName(e.target.value)} type="text" className="w-full p-2 border border-manthis-green rounded-md placeholder:font-light placeholder:text-mathis-green" name="name" id="name" value={name} placeholder="Jane Doe" />
           </div>
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
                  <input type="checkbox" className="mr-2" name="check" id="check" />
                  <span className="text-base text-manthis-green">
                    Remember for 30 days
                  </span>
               </div>
            <p className=''>{error}</p>
           </div>
           <button onClick={handleSignUp} className="w-full bg-bice-blue text-white p-3 rounded-lg mb-6 hover:bg-white hover:text-bice-blue hover:border hover:border-manthis-green font-semibold">Sign Up</button>
           <button onClick={handleGoogleSignIn} className="w-full border border-gray-400 text-bice-blue text-base p-2 rounded-lg mb-6 hover:bg-bice-blue hover:text-white font-semibold"><FcGoogle className=" w-6 h-6 inline mr-2" />Sign Up with Google</button>
           <div className="text-center text-bice-blue">
             Already have an account? {''}
              <span onClick={()=>router.push('/sign-in')} className="font-bold text-bice-blue cursor-pointer" >
                Go back to Sign In
              </span>
           </div>
        </div>
      </div>

    </div>
  )
}

export default SignUp;