// 'use client'
// import React,{useEffect, useState} from 'react';
// // import {useParams} from 'react-router-dom'
// import { Hospital } from '../about/interface';
// import axios from 'axios';

// function HospitalDetail() {
//     // const {id} = useParams();
//     const [hospital, setHospital] = useState<Hospital|null>(null);

//     useEffect(() =>{
//         axios
//       .get(
//         `https://getreliancehealth.com//wp-content/themes/getreliancehealthWPTheme/assets/cache/providers.json/${id}`
//       )
//       .then((response) => {
//         setHospital(response?.data?.data);
//          console.log("data", response?.data);
//       })
//       .catch((error) => {
//         console.error(
//           "There was an error fetching the hospital data: " + error
//         );
//       });
//   }, [id]);

//   if (!hospital){
//     return <div>Loading...</div>;
//   } 

//   return (
//     <div className="p-4 bg-manthis-green bg-opacity-40 text-white rounded-xl">
//       <h2 className="text-xl font-bold">{hospital.name}</h2>
//       <p>State: {hospital.state?.name}</p>
//       <p>Address: {hospital.address}</p>
//       <p>Phone number: {hospital.phone_number}</p>
//       <p>Email: {hospital.name}@gmail.com</p>
//     </div>
//   )
// }

// export default HospitalDetail