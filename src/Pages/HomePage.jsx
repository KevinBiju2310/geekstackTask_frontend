import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import home1 from "../assets/home1.png";
import home2 from "../assets/home2.png";
import home3 from "../assets/home3.png";
import workwise from "../assets/workwise.png";
import Search from "../assets/Search.png";

import Kmch from "../assets/Kmch.png";
import Richmond from "../assets/Richmond.png";
import fims from "../assets/fims.png";
import department from "../assets/department.png";
import location from "../assets/location.png";
import salary from "../assets/salary.png";

import { Home, ShoppingBag, Clock, MessageCircle } from "lucide-react";

const HomePage = () => {
  const messages = [
    {
      id: 1,
      name: "KMCH Hospital",
      message: "Thank you for your inter...",
      avatar: Kmch,
      messageCount: 2,
      time: "08:20",
    },
    {
      id: 2,
      name: "Richmond Hospital",
      message: "Hey hai...",
      avatar: Richmond,
      messageCount: 1,
      time: "10:20",
    },
    {
      id: 3,
      name: "Fims Hospital",
      message: "Thank you for your inter...",
      avatar: fims,
      messageCount: 2,
      time: "8:20",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex flex-col md:flex-row gap-4 px-4 py-6 md:items-start">
        <div className="basis-full md:basis-[30%] bg-red-200 p-4 rounded md:h-fit">
          <div className="bg-white rounded-lg p-4 shadow w-full flex flex-col items-center space-y-3">
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
              <MessageCircle className="text-gray-600" />
              <span className="text-sm font-medium text-gray-800">Message</span>
            </div>
            <div className="bg-white rounded-xl p-4 w-full flex items-center space-x-3">
              <Home className="text-gray-600" />
              <span className="text-sm font-medium text-gray-800">Duties</span>
            </div>
            <div className="bg-white rounded-xl p-4 w-full flex items-center space-x-3">
              <Home className="text-gray-600" />
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
              Discover Jobs Across <br />
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
          <div className="bg-white h-60 rounded-xl mt-8 p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Immediate Jobs
              </h3>
              <button className="text-[#1D267E] font-medium hover:underline">
                View All
              </button>
            </div>
            <hr className="mb-4 border-t border-gray-300" />
            <div className="w-full">
              <div className="flex overflow-x-auto gap-4 pb-2">
                <div className="min-w-[200px] bg-gray-50 rounded-lg p-4 shadow-sm flex flex-col items-center text-center">
                  <ShoppingBag className="w-6 h-6 text-[#1D267E] mb-2" />
                  <p className="text-sm text-gray-600">Location: Delhi</p>
                  <p className="text-sm text-gray-600">Hospital: ABC Care</p>
                </div>
                <div className="min-w-[200px] bg-gray-50 rounded-lg p-4 shadow-sm flex flex-col items-center text-center">
                  <ShoppingBag className="w-6 h-6 text-[#1D267E] mb-2" />
                  <p className="text-sm text-gray-600">Location: Mumbai</p>
                  <p className="text-sm text-gray-600">Hospital: HealWell</p>
                </div>
                <div className="min-w-[200px] bg-gray-50 rounded-lg p-4 shadow-sm flex flex-col items-center text-center">
                  <ShoppingBag className="w-6 h-6 text-[#1D267E] mb-2" />
                  <p className="text-sm text-gray-600">Location: Chennai</p>
                  <p className="text-sm text-gray-600">Hospital: Medix</p>
                </div>
                <div className="min-w-[200px] bg-gray-50 rounded-lg p-4 shadow-sm flex flex-col items-center text-center">
                  <ShoppingBag className="w-6 h-6 text-[#1D267E] mb-2" />
                  <p className="text-sm text-gray-600">Location: Bangalore</p>
                  <p className="text-sm text-gray-600">Hospital: CareMax</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl mt-8 p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Recommended jobs for you
              </h3>
              <button className="text-[#1D267E] font-medium hover:underline">
                View All
              </button>
            </div>
            <hr className="mb-4 border-t border-gray-300" />
            <div className="overflow-x-auto">
              <div className="flex space-x-4 w-max">
                <div className="bg-white rounded-xl shadow-md p-4 flex flex-col space-y-2 w-[400px]">
                  <div className="flex items-start space-x-3">
                    <img
                      src={Kmch}
                      alt="KMCH Logo"
                      className="w-10 h-10 rounded"
                    />
                    <div>
                      <h4 className="text-base font-semibold text-gray-800">
                        Duty Doctor / Medical Officer
                      </h4>
                      <p className="text-sm text-gray-500">
                        Kovai Medical Center and Hospitals
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <img src={department} />
                      Cardiology
                    </span>
                    <span className="flex items-center gap-1">
                      <img src={salary} />
                      10-15 laks
                    </span>
                    <span className="flex items-center gap-1">
                      <img src={location} />
                      Coimbatore, Tamil Nadu
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-snug">
                    We are seeking experienced Doctors with a minimum of 5+
                    years of clinical experience to join now. read more
                  </p>
                  <div className="flex gap-3">
                    <button className="flex-1 border border-[#1D267E] text-[#1D267E] text-sm font-medium rounded-full py-1 hover:bg-[#1D267E]/10">
                      Direct Call
                    </button>
                    <button className="flex-1 bg-[#1D267E] text-white text-sm font-medium rounded-full py-1 hover:bg-[#1D267E]/90">
                      Apply Now
                    </button>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-md p-4 flex flex-col space-y-2 w-[400px]">
                  <div className="flex items-start space-x-3">
                    <img
                      src={Kmch}
                      alt="KMCH Logo"
                      className="w-10 h-10 rounded"
                    />
                    <div>
                      <h4 className="text-base font-semibold text-gray-800">
                        Duty Doctor / Medical Officer
                      </h4>
                      <p className="text-sm text-gray-500">
                        Kovai Medical Center and Hospitals
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <img src={department} />
                      Cardiology
                    </span>
                    <span className="flex items-center gap-1">
                      <img src={salary} />
                      10-15 laks
                    </span>
                    <span className="flex items-center gap-1">
                      <img src={location} />
                      Coimbatore, Tamil Nadu
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-snug">
                    We are seeking experienced Doctors with a minimum of 5+
                    years of clinical experience to join now. read more
                  </p>
                  <div className="flex gap-3">
                    <button className="flex-1 border border-[#1D267E] text-[#1D267E] text-sm font-medium rounded-full py-1 hover:bg-[#1D267E]/10">
                      Direct Call
                    </button>
                    <button className="flex-1 bg-[#1D267E] text-white text-sm font-medium rounded-full py-1 hover:bg-[#1D267E]/90">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Fixed Messages Section */}
          <div className="bg-white rounded-xl mt-8 p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Messages</h3>
              <button className="text-[#1D267E] font-medium hover:underline">
                View All
              </button>
            </div>
            <hr className="mb-4 border-t border-gray-300" />

            <div className="space-y-3 max-h-58 overflow-y-auto px-2">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                >
                  <div className="relative flex-shrink-0">
                    <img
                      src={msg.avatar}
                      alt={msg.name}
                      className="w-12 h-12 object-cover"
                    />
                  </div>

                  {/* Message Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900 truncate">
                          {msg.name}
                        </h4>
                        <p className="text-xs text-gray-600 truncate mt-1">
                          {msg.message}
                        </p>
                      </div>

                      {/* Right side - Message count and time */}
                      <div className="flex flex-col items-end ml-2 flex-shrink-0">
                        {msg.messageCount > 0 && (
                          <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-[#1D267E] rounded-full">
                            {msg.messageCount}
                          </span>
                        )}
                        <div className="flex items-center space-x-1 text-xs text-gray-500 mb-1">
                          <Clock className="w-3 h-3" />
                          <span>{msg.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl mt-8 p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Dutys</h3>
              <button className="text-[#1D267E] font-medium hover:underline">
                View All
              </button>
            </div>
            <div className="flex justify-start gap-6 mb-4 px-2">
              <div className="cursor-pointer font-medium text-[#1D267E] border-b-2 border-[#1D267E] pb-1">
                Applied (20)
              </div>
              <div className="cursor-pointer text-gray-600 hover:text-[#1D267E] hover:border-b-2 hover:border-[#1D267E] pb-1">
                Waiting (19)
              </div>
              <div className="cursor-pointer text-gray-600 hover:text-[#1D267E] hover:border-b-2 hover:border-[#1D267E] pb-1">
                Rejected (22)
              </div>
            </div>

            <hr className="mb-4 border-t border-gray-300" />
            <div className="overflow-x-auto">
              <div className="flex space-x-4 w-max">
                <div className="bg-white rounded-xl shadow-md p-4 flex flex-col space-y-2 w-[400px]">
                  <div className="flex items-start space-x-3">
                    <img
                      src={Kmch}
                      alt="KMCH Logo"
                      className="w-10 h-10 rounded"
                    />
                    <div>
                      <h4 className="text-base font-semibold text-gray-800">
                        Duty Doctor / Medical Officer
                      </h4>
                      <p className="text-sm text-gray-500">
                        Kovai Medical Center and Hospitals
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <img src={department} />
                      Cardiology
                    </span>
                    <span className="flex items-center gap-1">
                      <img src={salary} />
                      10-15 laks
                    </span>
                    <span className="flex items-center gap-1">
                      <img src={location} />
                      Coimbatore, Tamil Nadu
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-snug">
                    We are seeking experienced Doctors with a minimum of 5+
                    years of clinical experience to join now. read more
                  </p>
                  <div className="flex gap-3">
                    <button className="flex-1 border border-[#1D267E] text-[#1D267E] text-sm font-medium rounded-full py-1 hover:bg-[#1D267E]/10">
                      Direct Call
                    </button>
                    <button className="flex-1 bg-[#1D267E] text-white text-sm font-medium rounded-full py-1 hover:bg-[#1D267E]/90">
                      Apply Now
                    </button>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-md p-4 flex flex-col space-y-2 w-[400px]">
                  <div className="flex items-start space-x-3">
                    <img
                      src={Kmch}
                      alt="KMCH Logo"
                      className="w-10 h-10 rounded"
                    />
                    <div>
                      <h4 className="text-base font-semibold text-gray-800">
                        Duty Doctor / Medical Officer
                      </h4>
                      <p className="text-sm text-gray-500">
                        Kovai Medical Center and Hospitals
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <img src={department} />
                      Cardiology
                    </span>
                    <span className="flex items-center gap-1">
                      <img src={salary} />
                      10-15 laks
                    </span>
                    <span className="flex items-center gap-1">
                      <img src={location} />
                      Coimbatore, Tamil Nadu
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-snug">
                    We are seeking experienced Doctors with a minimum of 5+
                    years of clinical experience to join now. read more
                  </p>
                  <div className="flex gap-3">
                    <button className="flex-1 border border-[#1D267E] text-[#1D267E] text-sm font-medium rounded-full py-1 hover:bg-[#1D267E]/10">
                      Direct Call
                    </button>
                    <button className="flex-1 bg-[#1D267E] text-white text-sm font-medium rounded-full py-1 hover:bg-[#1D267E]/90">
                      Apply Now
                    </button>
                  </div>
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
              How to coach managers on <br /> Effectively Leading Gen <br />Z
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
            <div className="w-full h-32 mb-4 flex items-center justify-center bg-gray-100 rounded-xl">
              <img
                src={Search}
                alt="Job Search"
                className="w-16 h-16 object-contain"
              />
            </div>
            <h4 className="text-2xl font-bold text-gray-800 mb-2">
              Job Search Tips for <br /> Healthcare Professionals
            </h4>
            <p className="text-md text-gray-600 mb-4">
              Discover effective strategies to find the perfect healthcare
              position that matches your skills and career goals in today's
              competitive market.
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
