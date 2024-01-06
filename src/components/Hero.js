import React from "react";
import { drawline, herobg, group1, group2, group3, group4 } from "../assets";

import { Link } from "react-router-dom";
import scrollToTop from "./scrollToTop";

const Hero = () => {
  const group = [
    {
      name: "Emotional Insights",
      image: group2,
      color: "#FFDCEFB2",
    },
    {
      name: "Mindfulness Exercises",
      image: group1,
      color: "#E5DCFFB2",
    },
    {
      name: "Mood Tracking",
      image: group3,
      color: "#FFEED8B2",
    },
    {
      name: "Progress Reflection",
      image: group4,
      color: "#E5DCFFB2",
    },
  ];

  return (
    <div className=" h-full   md:pt-24 pt-16 w-full bg-[--main-color] flex flex-col items-center justify-between">
      <div className="flex items-center md:flex-row flex-col justify-center container m-auto">
        <div className="flex flex-col md:ml-20 ml-0 justify-center w-[90%] md:w-[50%] py-12">
          <div className="flex  flex-col md:items-start items-center justify-center">
            <div className="flex  item-center md:justify-start  justify-center">
              <p className="text-[16px] border-2 p-2 border-gray-300 rounded-lg  font-[700] text-[#000000]">
                👋 Hey! Welcome to our Website
              </p>
            </div>
            <h1 className="  text-[#000A2D] py-4 text-2xl  leading-snug   text-center md:text-left  md:text-5xl font-[600]">
              Partnering for a Healthy Tomorrow: Your Mental Health Tracker
              {/* <img
                src={drawline}
                className="h-10  relative md:top-[-1.5rem] top-[-2.5rem]  md:left-[25%] left-[85%]"
                alt=""
              /> */}
            </h1>
          </div>
          <p className="text-[16px] text-justify text-[#636571] font-[400] md:my-0 my-2  md:w-[70%] w-[100%]">
            Daily journaling helps me stay mentally balanced. I track moods, set
            intentions, and note activities for self-reflection. Evening
            reflections include challenges, achievements, and gratitude,
            cultivating self-awareness and well-being.
          </p>

          {/* <div className="grid grid-cols-4 gap-2 mt-4 mb-8 w-[100%] md:w-[60%]">
            {group.map((item, index) => {
              return (
                <div
                  className="flex flex-col md:items-center items-start  justify-start py-4 "
                  key={index}
                >
                  <div
                    className={`p-4 rounded-lg mb-2`}
                    style={{ backgroundColor: `${item.color}` }}
                  >
                    <img src={item.image} alt="" className="h-10" />
                  </div>
                  <h2 className="text-[#4C4C4C] md:text-[12px] text-[10px] font-[500] text-center">
                    {item.name}
                  </h2>
                </div>
              );
            })}
          </div> */}
          <div className="flex mt-8 md:items-start items-center md:justify-start justify-center ">
            <Link to="/plans" onClick={scrollToTop}>
              <button className="mt-auto rounded-md bg-[--primary-color] font-[Poppins]  p-4 w-44   text-[18px] text-white text-center">
                Check Prices
              </button>
            </Link>
          </div>
        </div>

        <div>
          <img
            loading="lazy"
            src={herobg}
            alt=""
            className=" h-[380px] md:h-[600px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
