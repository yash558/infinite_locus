import React, { useState } from "react";
import { logo } from "../assets";

import { Link, useLocation } from "react-router-dom";
import scrollToTop from "./scrollToTop";


const Navbar = () => {
  const Links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Our Services",
      link: "/services",     
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Contact Us",
      link: "/contactus",
    },
  ];

  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <div
        className={`w-full sm:top-0 z-50 flex items-center justify-center fixed bg-[--main-color] backdrop-filter backdrop-blur-lg left-0`}
      >
        <div className="container">
          <div className="md:flex items-center justify-start backdrop-filter backdrop-blur-lg md:pl-32 px-4">
            <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
              <span className=" mr-1 ">
                <Link to="/">
                  <img src={logo} alt="" className="h-16 w-auto" />
                </Link>
              </span>
            </div>
            <div
              className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden"
              onClick={() => setOpen(!open)}
            >
              <ion-icon name={open ? "close" : "menu"}></ion-icon>
            </div>

            <ul
              className={`md:flex md:items-center md:pb-0  bg-[--main-color] pb-12 absolute md:static  md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "right-20" : "top-[-490px]"
              }`}
            >
              {Links.map((link) => {
                return (
                  <li
                    key={link.name}
                    className="md:ml-8 text-[20px] md:text-[16px]  cursor-pointer"
                    onClick={scrollToTop}
                  >
                    {link.subroutes ? (
                      <div className="group relative">
                        <Link
                          to={link.link}
                          className={` font-[500] md:my-0 my-8  ${
                            link.link === pathname
                              ? "text-[--theme]"
                              : "text-black"
                          } hover:text-[--theme] flex duration-500`}
                        >
                          {link.name}
                        </Link>
                        <ul className="absolute left-0 w-44 top-full hidden bg-[--main-color] group-hover:block p-2 rounded-md shadow-md">
                          {link.subroutes.map((subroute) => (
                            <li key={subroute.name}>
                              <Link
                                to={subroute.link}
                                className={`block px-4 py-2 text-[500] text-black hover:text-[--theme] transition duration-300`}
                              >
                                {subroute.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <Link
                        to={link.link}
                        className={` font-[500] md:my-0 my-8  ${
                          link.link === pathname
                            ? "text-[--theme]"
                            : "text-black"
                        } hover:text-[--primary-color] flex duration-500`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                );
              })}
              <div className="flex gap-6 flex-row relative left-[70%]">
                <button className="mt-auto rounded-md bg-[--theme] p-3 w-40 text-[18px] text-white text-center  ">
                  <a
                    href="/"
                    className="text-[16px] font-bold"
                    onClick={scrollToTop}
                  >
                    Explore More
                  </a>
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
