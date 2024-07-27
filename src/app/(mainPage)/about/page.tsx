"use client";
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { Hospital } from "./interface";
// import {Link} from 'react-router-dom';

function About() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [hospitals, setHospitals] = useState<Hospital[]>([]);

  useEffect(() => {
    // Fetch hospitals based on selected location

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

  return (
    <div className="p-4 min-h-screen">
      <h1 className="md:text-4xl text-3xl font-bold mb-4 ml-2">Carefinder</h1>
      <p className="mb-8 ml-3 text-xl">
        Find the best hospitals near you! Search and filter through a
        comprehensive list of hospitals using the hospital name or location.
      </p>

      <form className="md:w-[700px] w-[300px] pr-2 mb-4 relative">
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

      <div className=" lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-8 mx-4 my-6 space-y-8 lg:space-y-0 ">
        {hospitals
          ?.filter((hospital) =>
            hospital.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((hospital: Hospital) => (
            <div
              key={hospital?.id}
              className="p-4 bg-manthis-green bg-opacity-40 text-white rounded-xl"
            >
              <h2 className="text-2xl font-bold mb-4">{hospital?.name}</h2>
              <p className="mb-2 text-bice-blue font-medium tracking-tight text-xl">State: {hospital?.state?.name}</p>
              <p className="mb-2 text-bice-blue font-medium tracking-tight text-xl">Address: {hospital?.address}</p>
              <p className="mb-2 text-bice-blue font-medium tracking-tight text-xl">Phone number: {hospital?.phone_number}</p>
              <p className="mb-2 text-bice-blue font-medium tracking-tight text-xl"> Email: {hospital?.name}@gmail.com</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default About;
