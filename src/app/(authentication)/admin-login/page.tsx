"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

const Admin = (): React.JSX.Element => {
  const router = useRouter();

  const handleClick = (): void => {
    router.push("/admin-dashboard");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-bice-blue bg-opacity-40">
      <div className="relative lg:w-[65%] flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md-flex-row md:sapce-y-0 md:space:x-4 lg:space-x-8">
        <div className="flex flex-col justify-center p-4 md:p-8 lg:p-14">
          <span className="mb-1 lg:mb-3 text-2xl md:text-3xl lg:text-4xl font-bold text-manthis-green">
            {" "}
            Welcome, Admin!
          </span>
          <span className="font-light font-gray-400 mb-8 text-sm md:text-base lg:test-lg text-bice-blue">
            Welcome back! Please enter your details.
          </span>
          <div className="py-2 md:py-4 ">
            <label className="text-lg mb:text-xl mb-2 text-manthis-green">
              Email
            </label>
            <input
              type="text"
              className="w-full p-2 border border-manthis-green rounded-md placeholder:font-light placeholder:text-mathis-green"
              name="email"
              id="email"
              placeholder="JaneDoe@email.com"
            />
          </div>
          <div className=" py-2 md:py-4 ">
            <label className="text-lg md:text-xl mb-2 text-manthis-green">
              Password
            </label>
            <input
              type="password"
              className="w-full p-2 border border-manthis-green rounded-md placeholder:font-light placeholder:text-mathis-green"
              name="password"
              id="password"
              placeholder="JaneDoe123$"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-2 justify-between w-full py-4">
            <div className="mr-24 ">
              <input type="checkbox" className="mr-2" name="check" id="check" />
              <span className="text-base text-bice-blue">
                Remember for 30 days
              </span>
            </div>
          </div>
          <button className="w-full bg-manthis-green text-white p-3 rounded-lg mb-6 hover:bg-white hover:text-manthis-green hover:border hover:border-bice-blue font-semibold">
            Log In
          </button>
          <button className="w-full border border-gray-400 text-manthis-green text-base p-2 rounded-lg mb-6 hover:bg-manthis-green hover:text-white font-semibold">
            <FcGoogle className=" w-6 h-6 inline mr-2" />
            Login In with Google
          </button>
          <div className="text-center text-bice-blue">
            Done! Proceed to the {""}
            <span
              onClick={handleClick}
              className="font-bold text-bice-blue cursor-pointer"
            >
              Admin Dashboard
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
