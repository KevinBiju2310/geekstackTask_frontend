import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import home1 from "../assets/home1.png";
import home2 from "../assets/home2.png";
import home3 from "../assets/home3.png";
import workwise from "../assets/workwise.png";
import Search from "../assets/Search.png";

import { Home, ShoppingBag } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex flex-col md:flex-row gap-4 px-4 py-6 md:items-start">
        {/* col 1 - Fixed height */}
        <div className="basis-full md:basis-[30%] bg-red-200 p-4 rounded md:h-fit">
          <div className="bg-white rounded-lg p-4 shadow w-full flex flex-col items-center space-y-3">
            {/* Your content here */}
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="bg-blue-400 w-24 h-24 rounded-full object-cover"
            />
            <div className="text-center">
              <p className="text-lg font-semibold">Dr. Ayesha Sharma</p>
              <p className="text-sm text-gray-600">Duty Doctor</p>
              <p className="text-sm text-gray-600">
                @KMCH Hospital, Coimbatore
              </p>
            </div>
            <button className="bg-[#1D267E] text-white px-8 py-3 rounded-3xl text-base font-medium hover:opacity-90 transition">
              Complete Profile
            </button>
            <div className="bg-[#F6F6FA] rounded-xl p-4 w-full">
              <h3 className="text-xl font-semibold text-black-700 mb-3">
                Profile Performance
              </h3>
              <div className="flex divide-x divide-gray-300">
                <div className="w-1/2 pr-2">
                  <p className="text-sm text-gray-600">
                    Search <br />
                    Appearances
                  </p>
                  <span className="text-blue-800">20 </span>
                </div>
                <div className="w-1/2 pl-2">
                  <p className="text-sm text-gray-600">
                    Recruiter <br />
                    Actions
                  </p>
                  <span className="text-blue-800">15</span>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-300 my-4 w-full"></div>
            <div className="bg-[#F6F6FA] rounded-xl p-4 w-full flex items-center space-x-3">
              <Home className="text-[#1D267E]" />
              <span className="text-sm font-medium text-gray-800">My Home</span>
            </div>
            <div className="bg-white rounded-xl p-4 w-full flex items-center space-x-3">
              <Home />
              <span className="text-sm font-medium text-gray-800">Message</span>
            </div>
            <div className="bg-white rounded-xl p-4 w-full flex items-center space-x-3">
              <Home />
              <span className="text-sm font-medium text-gray-800">Duties</span>
            </div>
            <div className="bg-white rounded-xl p-4 w-full flex items-center space-x-3">
              <Home />
              <span className="text-sm font-medium text-gray-800">
                Wishlist
              </span>
            </div>
          </div>
        </div>
        <div className="basis-full md:basis-[60%] bg-green-200 p-4 rounded">
          <div
            className="bg-[#9ea4db] h-96 rounded-xl shadow bg-cover bg-center"
            style={{
              backgroundImage: `
        url(${home1}),
        url(${home2}),
        url(${home3})
      `,
              backgroundRepeat: "no-repeat, no-repeat, no-repeat",
              backgroundPosition: "left center, right center, left bottom",
              backgroundSize: "45% auto, 45% auto, 45% auto",
            }}
          >
            <h2 className="p-8 text-5xl font-bold text-[#FFD739]">
              Discover Jobs Accross <br />
              Popular Roles.!
            </h2>
            <p className="ml-2 mb-12 pl-6 text-3xl text-white">
              Select a role and we'll show you relevant <br />
              jobs for it
            </p>
            <div className="flex gap-4 mt-10 ml-8">
              <button className="bg-white text-[#1D267E] font-bold px-12 py-6 text-xl rounded-full hover:opacity-90 transition">
                View Profile
              </button>
              <button className="bg-[#1D267E] text-white font-bold px-12 py-6 text-xl rounded-full hover:bg-gray-400 transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="bg-white h-60 rounded-xl mt-8">
            <div className="flex justify-between items-center mt-8 px-2">
              <h3 className="text-xl font-semibold text-gray-800 mt-6">
                Immediate Jobs
              </h3>
              <button className="text-[#1D267E] font-medium hover:underline mt-4">
                View All
              </button>
            </div>
            <hr className="my-4 border-t border-gray-300" />
            <div className="w-full">
              <div className="flex overflow-x-auto gap-4 pb-2">
                <div className="min-w-[200px] bg-white rounded-lg p-4 shadow-md flex flex-col items-center text-center">
                  <ShoppingBag className="w-6 h-6 text-[#1D267E]" />
                  <p className="text-sm text-gray-600">Location: Delhi</p>
                  <p className="text-sm text-gray-600">Hospital: ABC Care</p>
                </div>
                <div className="min-w-[200px] bg-white rounded-lg p-4 shadow-md flex flex-col items-center text-center">
                  <ShoppingBag className="w-6 h-6 text-[#1D267E]" />
                  <p className="text-sm text-gray-600">Location: Mumbai</p>
                  <p className="text-sm text-gray-600">Hospital: HealWell</p>
                </div>
                <div className="min-w-[200px] bg-white rounded-lg p-4 shadow-md flex flex-col items-center text-center">
                  <ShoppingBag className="w-6 h-6 text-[#1D267E]" />
                  <p className="text-sm text-gray-600">Location: Chennai</p>
                  <p className="text-sm text-gray-600">Hospital: Medix</p>
                </div>
                <div className="min-w-[200px] bg-white rounded-lg p-4 shadow-md flex flex-col items-center text-center">
                  <ShoppingBag className="w-6 h-6 text-[#1D267E]" />
                  <p className="text-sm text-gray-600">Location: Chennai</p>
                  <p className="text-sm text-gray-600">Hospital: Medix</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-full md:basis-[30%] bg-blue-200 p-4 rounded">
          <div className="bg-white rounded-3xl p-4 shadow w-full mb-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4 ml-4">
              Where are you in your job <br />
              search journey?
            </h3>
            <div className="bg-gray-100 rounded-xl p-3 mb-4">
              <p className="text-sm text-gray-700">Actively searching jobs</p>
            </div>
            <div className="bg-gray-100 rounded-xl p-3 mb-4">
              <p className="text-sm text-gray-700">Preparing for interviews</p>
            </div>
            <div className="bg-gray-100 rounded-xl p-3 mb-4">
              <p className="text-sm text-gray-700">Received job offer</p>
            </div>
            <div className="bg-gray-100 rounded-xl p-3">
              <p className="text-sm text-gray-700">Casually exploring jobs</p>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-4 shadow w-full mb-4 overflow-hidden">
            <div className="w-full h-32 mb-4">
              <img
                src={workwise}
                alt="Job Search"
                className="w-full h-full object-cover rounded-t-3xl"
              />
            </div>
            <h4 className="text-2xl font-bold text-gray-800 mb-2">
              How to coach mangers on <br /> Effectively Leading Gen <br />Z
              employees
            </h4>
            <p className="text-md text-gray-600 mb-4">
              Generation Z, the digital natives entering the workforce, bring
              unique qualities, from an entrepreneurial mindset to a strong
              preference for financial stability.
            </p>
            <div className="">
              <button className="text-[#1D267E] font-medium text-sm hover:underline">
                Know More
              </button>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-4 shadow w-full mb-4 overflow-hidden">
            <div className="w-full h-32 mb-4">
              <img src={Search} alt="Job Search" className="w-24 h-24" />
            </div>
            <h4 className="text-2xl font-bold text-gray-800 mb-2">
              How to coach mangers on <br /> Effectively Leading Gen <br />Z
              employees
            </h4>
            <p className="text-md text-gray-600 mb-4">
              Generation Z, the digital natives entering the workforce, bring
              unique qualities, from an entrepreneurial mindset to a strong
              preference for financial stability.
            </p>
            <div className="">
              <button className="text-[#1D267E] font-medium text-sm hover:underline">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div className="mt-0 border-t border-white/20 pt-4 text-center text-xs text-gray-700">
        All rights reserved ©{new Date().getFullYear()} Duty Doctors (India)
        Ltd.
      </div>
    </div>
  );
};

export default HomePage;
