"use client";
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { Hospital } from "./interface";
import Papa from "papaparse";

function Hospitals():React.JSX.Element {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [hospitals, setHospitals] = useState<Hospital[]>([]);

  //Using useState to set pagination for my hospitals, 12 hospitals per page
  const [pagination, setPagination] = useState<number>(1);
  const hospitalsPerPage = 12;

useEffect(() => {
    // Fetch hospitals from our endpoint
axios
      .get(
        "https://getreliancehealth.com//wp-content/themes/getreliancehealthWPTheme/assets/cache/providers.json"
      )
      .then((response) => {
        setHospitals(response?.data?.data);
         console.log("data", response?.data);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the hospital data: " + error
        );
      });
  }, []);

//Allows us to set pagination for our list of hospitals
  const startIndex = (pagination-1) * hospitalsPerPage;
  const endIndex = startIndex + hospitalsPerPage;
  const currentHospitals = hospitals
            .filter(hospital => hospital.name.toLowerCase().includes(searchQuery.toLowerCase()))
            . slice(startIndex, endIndex);

            const handleNextPage = () => {
              if (endIndex < hospitals.length){
              setPagination(pagination + 1);
              }
            };

            const handlePreviousPage = () => {
              if (pagination > 1){
                setPagination(pagination - 1);
              }
            };


//Allows us to export our list of hospitals to a CSV file, after filtering it based on location 
  const exportToCSV = () => {
    const filteredHospitals = hospitals.filter(hospital =>
      hospital.name.toLowerCase().includes(searchQuery.toLowerCase())
    ); 
      
// Transforming the data to CSV format based on the location
    const csvData = filteredHospitals.map(hospital => ({ 
    Name: hospital?.name,
    State: hospital?.state?.name,
    Address: hospital?.address,
    PhoneNumber: hospital?.phone_number,
    Email:`${hospital?.name}@gmail.com`,
   }));

// Using PapaParse to convert the data
   const csv = Papa.unparse(csvData);
   const blob = new Blob ([csv], {type: "text/csv;charset=utf-8;"});
   const link = document.createElement("a");
   const url = URL.createObjectURL(blob);
   link.setAttribute("href", url);
   link.setAttribute("download", "hospitals.csv");
   link.style.visibility = "hidden";
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
  };

  //Allows us share a link to the CSV file we created containg our list of hospital based on location
  const shareCSV = () => {
  const csvData = hospitals.map(hospital => ({
    Name: hospital?.name,
    State: hospital?.state?.name,
    Address: hospital?.address,
    PhoneNumber: hospital?.phone_number,
    Email:`${hospital?.name}@gmail.com`,
  }));


const csv = Papa.unparse(csvData);
const blob = new Blob([csv], { type:'text/csv; charset=utf-8;'});
const file = new File ([blob], 'hospitals.csv', {type:'text/csv'});

//An if statement showing that the share was successful or the share failed
 if (navigator.share){
  navigator.share ({
    title: "Hospitals near me",
    text: "Check out the list of hospitals near me!",
    files: [file]
  }).then(()=>{
    console.log("Successfully shared");
  }).catch((error)=>{
    console.error("Failed to share", error);
  });
 } else {
  console.log('Web Share API not supported in your browser!');
 }
};

  return (

    <div className="p-4 min-h-screen">
      <h1 className="md:text-4xl text-3xl font-bold mb-4 ml-2">Carefinder</h1>
      <p className="mb-8 ml-3 text-xl">
        Find the best hospitals near you! Search and filter through a
        comprehensive list of hospitals using the hospital name or location.
      </p>

      <form className="md:w-[700px] w-[300px] pr-2 mb-10 relative ">
        <div className="relative ml-2">
          <input
            type="text"
            placeholder="Enter location here"
            className="w-full p-4 rounded-full bg-bice-blue bg-opacity-40 placeholder:text-white outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-bice-blue rounded-full">
            <FaSearch className="text-white" />
          </button>
        </div>
        {/* <div className="absolute top-20 p-4 bg-bice-blue bg-white text-bice-blue w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2 "></div> */}
      </form>

      <div className=" lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-8 mx-4 my-6 space-y-8 lg:space-y-0 ">
        {currentHospitals
          ?.filter((hospital) =>
            hospital.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((hospital: Hospital) => (
            <div
              key={hospital?.id}
              className="p-4 bg-manthis-green bg-opacity-40 text-white rounded-xl"
            >
              <h2 className="text-2xl font-bold mb-4">{hospital?.name}</h2>
              <p className="mb-2 text-bice-blue font-medium tracking-tight text-xl">Type: {hospital?.type?.name}</p>
              <p className="mb-2 text-bice-blue font-medium tracking-tight text-xl">State: {hospital?.state?.name}</p>
              <p className="mb-2 text-bice-blue font-medium tracking-tight text-xl">Address: {hospital?.address}</p>
              <p className="mb-2 text-bice-blue font-medium tracking-tight text-xl">Phone number: {hospital?.phone_number}</p>
              {/* <p className="mb-2 text-bice-blue font-medium tracking-tight text-xl">Email: {hospital?.name}@gmail.com</p> */}
            </div>
          ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-10">
        <button onClick={handlePreviousPage} disabled={pagination === 1} className="px-4 py-2 bg-bice-blue lg:text-2xl text-white rounded-full">
          Prev
        </button>
        <button onClick={handleNextPage} disabled={endIndex >= hospitals.length} className="px-4 py-2 bg-bice-blue lg:text-2xl text-white rounded-full">
          Next
        </button>
      </div>
      
    {/*A button that allows us to export to CSV file*/}
    <div className="flex items-center justify-center mt-6 gap-4">
    <button onClick={exportToCSV} className="px-6 py-2 bg-bice-blue bg-opacity-40 lg:text-2xl text-white rounded-full">
          Export to CSV
    </button>
    <button onClick={shareCSV} className="px-6 py-2 bg-bice-blue bg-opacity-40 lg:text-2xl text-white rounded-full">
          Share CSV
    </button>

    </div>
   </div>
  );
}

export default Hospitals;
