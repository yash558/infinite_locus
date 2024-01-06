import React from "react";
import { aboutus, checkIcon } from "../assets";
import { Link } from "react-router-dom";
import scrollToTop from "./scrollToTop";

const About = () => {
  const feature = [
    {
      name: "Personalized Wellness Plans",
    },
    {
      name: "24/7 Access to Fitness Experts",
    },
    {
      name: "Track and Manage Fitness Expenses",
    },
    {
      name: "Effortless Wellness Claim Process",
    },
  ];
  return (
    <div className="h-full bg-[--main-color]">
      <div className=" flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2  items-center justify-center">
          <div className="flex items-center justify-center">
            <img
              src={aboutus}
              alt=""
              className="md:h-[650px] h-[450px]  z-10"
            />
          </div>
          <div className="p-12">
            <div className="flex items-center md:justify-start justify-center">
              <h1 className="text-black text-lg rounded-md font-[700]  border-2 p-2">
                🚀 About Find Your Balance
              </h1>
            </div>
            <div>
              <h2 class="md:text-5xl text-2xl font-semibold mt-8 mb-4 text-left">
                Embark on Your <br /> Wellness Odyssey With Us
              </h2>
            </div>
            <div className="w-[100%] md:w-[80%]  text-justify">
              Find Your Balance transforms mental health and fitness access for
              a user-centric and approachable experience. Our annual plans
              prioritize mental well-being, covering therapy sessions, mental
              health apps, wellness programs, and check-ups. We ensure that
              mental health support is financially sustainable, catering to
              individuals and corporate needs across India. With MindEase Plus,
              revolutionize your approach to mental health and fitness, making
              it accessible without draining your resources.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-90% gap-6 my-8">
              {feature.map((item, index) => (
                <div className="flex items-center  " key={index}>
                  <div className="bg-white rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-8 w-8 bg-transparent text-[--primary-color]"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h1 className="text-[#000A2D] text-md font-semibold ml-2">
                    {item.name}
                  </h1>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap md:gap-10 gap-4  items-center justify-start">
              <Link to="/about" onClick={scrollToTop}>
                <button className="mt-auto rounded-md bg-[--primary-color] font-[700]  p-4 md:w-44  w-32  md:text-[18px] text-[14px] text-white text-center">
                  Learn More
                </button>
              </Link>
              <Link to="/contactus" onClick={scrollToTop}>
                <button className="mt-auto rounded-md text-[--primary-color] font-[700]  p-4 md:w-36 w-30   md:text-[18px] text-[14px] border-[#98B3FF3B] border-[2px]  bg-white text-center">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
