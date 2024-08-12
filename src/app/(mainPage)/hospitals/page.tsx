"use client";
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { Hospital } from "./interface";
import Loader from "@/components/loader";
import ExportCSV from "@/components/exportCsv"
import ShareCSV from "@/components/shareCsv";

const Hospitals = ():React.JSX.Element => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [pagination, setPagination] = useState<number>(1);
  const hospitalsPerPage: number = 12;
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);// set loading to true before fetching data
    axios
      .get("/api/hospital")
      .then((response) => {
        setHospitals(response?.data?.hospital);
        setLoading(false);// set loading to false after fetching data
      })
      .catch((error) => {
        console.error("There was an error fetching the hospital data: " + error);
        setLoading(false); // set loading to false incase of error
      });
  }, []);

//This allows me implement pagination
  const startIndex = (pagination - 1) * hospitalsPerPage;
  const endIndex = startIndex + hospitalsPerPage;
  const currentHospitals = hospitals
    .filter((hospital) =>
      hospital.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (endIndex < hospitals.length) {
      setPagination(pagination + 1);
    }
  };

  const handlePreviousPage = () => {
    if (pagination > 1) {
      setPagination(pagination - 1);
    }
  };
  
  // The loader spins as the hopital data is being fetched
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }

return (
    <div className="p-4 min-h-screen">
      <h1 className="md:text-4xl text-3xl font-bold mb-4 ml-2 text-gray-700">
        Carefinder
      </h1>
      <p className="mb-8 ml-3 text-xl text-gray-800">
        Find the best hospitals near you! Search and filter through a
        comprehensive list of hospitals using the hospital name or location.
      </p>
      <form className="md:w-[700px] w-[300px] pr-2 mb-10 relative">
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
      </form>
 
     <div className="lg:grid lg:grid-cols-4 lg:gap-8 mx-4 my-6 space-y-8 lg:space-y-0">
        {currentHospitals.map((hospital: Hospital) => (
          <div key={hospital?.id} className="p-4 bg-manthis-green bg-opacity-40 text-white rounded-xl">
            <h2 className="text-2xl font-bold mb-4">{hospital?.name}</h2>
            <p className="mb-2 text-bice-blue font-bold tracking-tight text-xl">
              Type: <span className="text-bice-blue font-medium tracking-tight text-xl">{hospital?.type?.name}</span>
            </p>
            <p className="mb-2 text-bice-blue font-bold tracking-tight text-xl">
              State: <span className="text-bice-blue font-medium tracking-tight text-xl"> {hospital?.state?.name}</span>
            </p>
            <p className="mb-2 text-bice-blue font-bold tracking-tight text-xl">
              Address: <span className="text-bice-blue font-medium tracking-tight text-xl">{hospital?.address}</span>
            </p>
            <p className="mb-2 text-bice-blue font-bold tracking-tight text-xl">
              Phone number: <span className="text-bice-blue font-medium tracking-tight text-xl">{hospital?.phone_number}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          onClick={handlePreviousPage}
          disabled={pagination === 1}
          className="px-4 py-2 bg-bice-blue lg:text-2xl text-white rounded-full"
        >
          Prev
        </button>
        <button
          onClick={handleNextPage}
          disabled={endIndex >= hospitals.length}
          className="px-4 py-2 bg-bice-blue lg:text-2xl text-white rounded-full"
        >
          Next
        </button>
      </div>
      <div className="flex items-center justify-center mt-6 gap-4">
        <ExportCSV hospitals={currentHospitals} searchQuery={searchQuery} />
        <ShareCSV hospitals={currentHospitals} />
      </div>
    </div>
  );
};

export default Hospitals;
