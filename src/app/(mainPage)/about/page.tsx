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
      <h1 className="text-4xl font-bold mb-4">Carefinder</h1>
      <p className="mb-8">
        Find the best hospitals near you! Search and filter through a
        comprehensive list of hospitals.
      </p>

      <form className="w-[500px] mb-4 relative">
        <div className="relative">
          <input
            type="text"
            placeholder="Enter location here"
            className="w-full p-4 rounded-full bg-bice-blue bg-opacity-40 placeholder:text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-bice-blue rounded-full">
            <FaSearch className="text-white" />
          </button>
        </div>
        {/* <div className="absolute top-20 p-4 bg-bice-blue bg-white text-bice-blue w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2 "></div> */}
      </form>

      <div className="space-y-4">
        {hospitals
          ?.filter((hospital) =>
            hospital.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((hospital: Hospital) => (
            <div
              key={hospital?.id}
              className="p-4 bg-manthis-green bg-opacity-40 text-white rounded-xl"
            >
              <h2 className="text-xl font-bold">{hospital?.name}</h2>
              <p>State:{hospital?.state?.name}</p>
              <p>Address: {hospital?.address}</p>
              <p>Phone number: {hospital?.phone_number}</p>
              <p> Email: {hospital?.name}@gmail.com</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default About;
