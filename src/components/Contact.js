import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import {
  Instagram,
  Linkedin,
  facebook,
  twitter,
  whatsapp,
  youtube,
} from "../assets";
import axios from "axios";
import { Link } from "react-router-dom";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const options = [  
    { value: "mentalHealth", label: "Mental Health Inquiry" },
    { value: "fitness", label: "Fitness Inquiry" },
    { value: "other", label: "Other Inquiry" },
    { value: "general", label: "General Inquiry" }, 
  ];
  
  
  const form = useRef();
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const response = await axios.post(``, {
      first_name: firstName,
      email: email,
      last_name: lastName,
      phone_number: phone,
      message: message,
      subject: selectedOption,
    });
    console.log(response.data);
    toast.success(
      "We have received your message. One of our representatives will get in touch with you shortly."
    );
    setFirstName("");
    setEmail("");
    setLastName("");
    setPhone("");
    setMessage("");
    setSelectedOption("");
  };
  return (
    <div className="bg-[--main-color]">
      {/* <Toaster /> */}
      <div className={`flex items-center bg-[--main-color]  justify-center pt-10`}>
        <button
          type="submit"
          className="bg-[--primary-color]  text-white text-xl font-bold py-2 px-6 h-14 w-56 rounded focus:outline-none focus:shadow-outline"
        >
          Get in touch
        </button>
      </div>

      <div
        className="  flex flex-wrap items-center justify-center py-20"
        id="contact"
      >
        <div className="bg-[--primary-color] h-full p-12 flex flex-col  rounded-tl-md rounded-bl-md">
          <div className="bg-transparent">
            <h1 className="text-3xl bg-transparent text-white font-[800]">
              Contact Information
            </h1>
            <h2 className="text-[#C9C9C9] my-4 bg-transparent">
              For easy connect with our team , <br /> you may write to
              support@MenthHealthCare.com
            </h2>
          </div>
          <div className="bg-transparent">
            <div className="flex flex-row my-8  bg-transparent gap-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
                className="bg-transparent"
              >
                <path
                  d="M19.5525 10.3036H21.4254C21.4254 5.49961 17.7985 1.87646 12.9879 1.87646V3.74938C16.7918 3.74938 19.5525 6.50536 19.5525 10.3036Z"
                  fill="white"
                />
                <path
                  d="M12.9976 7.49507C14.9669 7.49507 15.8069 8.33507 15.8069 10.3044H17.6798C17.6798 7.28437 16.0176 5.62216 12.9976 5.62216V7.49507ZM16.2021 12.5922C16.0222 12.4286 15.7857 12.3414 15.5427 12.3489C15.2996 12.3564 15.069 12.4581 14.8995 12.6325L12.6586 14.9371C12.1192 14.8341 11.0348 14.496 9.9185 13.3826C8.80225 12.2654 8.46419 11.1782 8.36399 10.6425L10.6667 8.40062C10.8413 8.23125 10.9431 8.00059 10.9506 7.75747C10.9581 7.51436 10.8708 7.27785 10.707 7.09802L7.2468 3.2932C7.08296 3.1128 6.85525 3.00337 6.61202 2.98816C6.3688 2.97294 6.12923 3.05314 5.94419 3.21173L3.91208 4.95447C3.75018 5.11696 3.65354 5.33322 3.64051 5.56223C3.62646 5.79634 3.35863 11.342 7.65884 15.6441C11.4103 19.3946 16.1094 19.669 17.4036 19.669C17.5928 19.669 17.7089 19.6634 17.7398 19.6615C17.9688 19.6487 18.1849 19.5516 18.3466 19.389L20.0884 17.3559C20.2471 17.171 20.3275 16.9315 20.3124 16.6883C20.2974 16.4451 20.1881 16.2173 20.0079 16.0533L16.2021 12.5922Z"
                  fill="white"
                />
              </svg>

              <h2 className="text-white bg-transparent text-[16px] font-[400]">
                +91-9898928911
              </h2>
            </div>
            <div className="flex flex-row my-8 bg-transparent gap-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
                className="bg-transparent"
              >
                <path
                  d="M21.4252 4.04688H2.69604V19.0302H21.4252V4.04688ZM19.5522 7.7927L12.0606 12.475L4.56896 7.7927V5.91979L12.0606 10.6021L19.5522 5.91979V7.7927Z"
                  fill="white"
                />
              </svg>

              <h2 className="text-white bg-transparent text-[16px] font-[400]">
                support@MenthHealthCare.com
              </h2>
            </div>
            <div className="flex flex-row my-8 gap-x-4  bg-transparent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="bg-transparent"
                bac
              >
                <path
                  d="M12.0605 2.00342C10.0123 2.00583 8.04861 2.82057 6.60028 4.26891C5.15194 5.71725 4.3372 7.68092 4.33479 9.72917C4.33233 11.403 4.87909 13.0314 5.89117 14.3646C5.89117 14.3646 6.10188 14.6421 6.13629 14.6821L12.0605 21.669L17.9876 14.6786C18.0185 14.6414 18.2299 14.3646 18.2299 14.3646L18.2306 14.3625C19.2422 13.0299 19.7887 11.4022 19.7863 9.72917C19.7839 7.68092 18.9691 5.71725 17.5208 4.26891C16.0725 2.82057 14.1088 2.00583 12.0605 2.00342ZM12.0605 12.5385C11.5049 12.5385 10.9617 12.3738 10.4997 12.0651C10.0377 11.7564 9.67766 11.3176 9.46503 10.8043C9.25239 10.2909 9.19676 9.72606 9.30516 9.18109C9.41356 8.63613 9.68112 8.13555 10.074 7.74265C10.4669 7.34976 10.9675 7.08219 11.5125 6.97379C12.0574 6.86539 12.6223 6.92102 13.1356 7.13366C13.649 7.34629 14.0877 7.70638 14.3964 8.16837C14.7051 8.63037 14.8699 9.17353 14.8699 9.72917C14.869 10.474 14.5727 11.188 14.046 11.7147C13.5194 12.2413 12.8053 12.5376 12.0605 12.5385Z"
                  fill="white"
                />
              </svg>
              <h2 className="text-white bg-transparent text-[16px] mb-0 pb-0 font-[400]">
                B-78 Sewa Park <br /> Uttam Nagar, <br /> Near Greater Kailash
                Metro, <br /> Block E Greater Kailash II, <br /> New Delhi,
                Delhi 110048
              </h2>
            </div>
          </div>
          <div className="md:mb-[-2rem] bg-transparent flex items-end md:justify-start justify-center   md:ml-2 gap-4">
            <Link
              to="https://api.whatsapp.com/send/?phone=919810113654&text&type=phone_number&app_absent=0"
              target="_blank"
              className="bg-transparent"
            >
              <img src={whatsapp} alt="" className="h-7 bg-transparent" />
            </Link>
            <a
              href="https://www.linkedin.com/company/80332580/admin/feed/posts/"
              target="_blank"
              className="bg-transparent"
            >
              <img src={Linkedin} alt="" className="h-7 bg-transparent" />
            </a>
            <a
              href="https://www.instagram.com/opdsure/"
              target="_blank"
              className="bg-transparent"
            >
              <img src={Instagram} alt="" className="h-7 bg-transparent" />
            </a>
            <a
              href="https://twitter.com/OpdSure"
              target="_blank"
              className="bg-transparent"
            >
              <img src={twitter} alt="" className="h-7 bg-transparent" />
            </a>
            <a
              href="https://www.youtube.com/@OPDSure"
              target="_blank"
              className="bg-transparent"
            >
              <img src={youtube} alt="" className="h-6 bg-transparent" />
            </a>
          </div>

          <div className="relative top-[-62px] bg-transparent md:left-[200px]">
            <div className="relative md:flex hidden bg-transparent z-30 top-[3rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="130"
                height="130"
                viewBox="0 0 130 130"
                fill="none"
                className="bg-transparent"
              >
                <circle
                  cx="64.9971"
                  cy="65.1476"
                  r="64.6154"
                  fill="#f7466a"
                  fillOpacity="0.34"
                />
              </svg>
            </div>
            <div className="z-10 bg-transparent  md:flex hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="170"
                height="173"
                viewBox="0 0 170 173"
                fill="none"
                className="bg-transparent"
              >
                <circle cx="126.557" cy="126.833" r="125.953" fill="#f7466a" />
              </svg>
            </div>
          </div>

          <div className="flex flex-row md:justify-start justify-center gap-6 md:mt-[-7rem]    "></div>
        </div>
        <div className="bg-white md:px-8 px-4    md:w-[40%] w-[100%] h-full py-20 shadow-2xl">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full max-w-lg  bg-white mx-auto"
          >
            <div className="grid bg-white grid-cols-2 gap-8">
              <div className="mb-4 bg-transparent">
                <label
                  htmlFor="name"
                  className="block  bg-transparent text-gray-700 text-sm font-bold mb-2"
                >
                  FirstName:
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="name"
                  className="appearance-none bg-white border-b-2 border-[#8D8D8D] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4 bg-white">
                <label
                  htmlFor="lastName"
                  className="block bg-white text-gray-700 text-sm font-bold mb-2"
                >
                  LastName:
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="appearance-none  bg-transparent border-b-2 border-[#8D8D8D] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4 bg-white">
                <label
                  htmlFor="email"
                  className="block bg-white text-gray-700 text-sm font-bold mb-2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  name="Email"
                  id="email"
                  className="appearance-none border-b-2 bg-white border-[#8D8D8D] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4 bg-white">
                <label
                  htmlFor="phone no"
                  className="block text-gray-700  bg-white text-sm font-bold mb-2"
                >
                  Phone No:
                </label>
                <input
                  type="phone"
                  name="Phone"
                  id="phone"
                  className="appearance-none bg-white border-b-2 border-[#8D8D8D] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>
            <label htmlFor="option" className="text-black bg-white font-[600] mt-10">
              Select Subject?
            </label>
            <div className="grid grid-cols-2 bg-white gap-4 mt-2">
              {options.map((option) => (
                <label key={option.value} className="mx-2 bg-white">
                  <input
                    type="radio"
                    name="option"
                    value={option.label}
                    checked={selectedOption === option.label}
                    onChange={handleChange}
                    className="bg-white"
                  />
                  &nbsp;{option.label}
                </label>
              ))}
            </div>
            <div className="my-8 bg-white  mt-12">
              <label
                htmlFor="message"
                className="block text-gray-700 bg-white text-sm font-bold mb-2"
              >
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                rows="3"
                className="shadow appearance-none bg-white border-b-2 border-[#8D8D8D] rounded w-full py-2 px-3 text-gray-700  focus:outline-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="flex items-center bg-white justify-end">
              <button
                type="submit"
                className="bg-[--primary-color]  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
