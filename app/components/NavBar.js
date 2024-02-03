import React, { useState } from "react";
import { motion } from "framer-motion";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const giveMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full h-[6vw] flex justify-between items-center relative p-5 border-b-2 border-black">
      <div className="overflow-hidden h-full w-40">
        <motion.h1
          initial={{ x: 150 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.75 }}
          className="font-semibold text-2xl m-4 nav-head"
        >
          The Hospital
        </motion.h1>
      </div>
      <div
        className={`h-[50vh] w-full box absolute ${
          isOpen ? "top-0" : "-top-[1500%]"
        } left-0 flex bg-blue-950 duration-1000 ease-in-out p-5`}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: isOpen ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-full w-1/3 flex justify-center items-center bg-red-900 nav-img-div max-[640px]:w-0"
        ></motion.div>

        <div className="h-full w-2/3 flex p-5 flex-col items-center">
          <ul className="mt-10">
            <li className="relative w-[8vw] h-14 overflow-hidden flex flex-col max-[640px]:w-[25vw]">
              <a
                href="/"
                className="text-5xl max-[640px]:text-[6vw] bg-black text-white after:absolute after:h-[2px] after:w-full after:bg-white after:top-[calc(100%-2px)] after:-left-full hover:after:left-0 after:duration-1000 after:ease-out home"
                onMouseEnter={() => {
                  const a = document.querySelector(".home .p1");
                  const b = document.querySelector(".home .p2");
                  a.style.top = "-100%";
                  b.style.top = "0%";
                }}
                onMouseLeave={() => {
                  const a = document.querySelector(".home .p1");
                  const b = document.querySelector(".home .p2");
                  a.style.top = "0";
                  b.style.top = "100%";
                }}
              >
                <p className="absolute top-0 left-0 p1 duration-700">Home</p>
                <p className=" absolute top-full p2 duration-700">Home</p>
              </a>
            </li>

            <li className="relative w-[13vw] max-[640px]:w-[25vw] h-14 overflow-hidden flex flex-col">
              <a
                href="/"
                className="text-5xl max-[640px]:text-[6vw] bg-black text-white after:absolute after:h-[2px] after:w-full after:bg-white after:top-[calc(100%-2px)] after:-left-full hover:after:left-0 after:duration-1000 after:ease-out meds"
                onMouseEnter={() => {
                  const a = document.querySelector(".meds .p1");
                  const b = document.querySelector(".meds .p2");
                  a.style.top = "-100%";
                  b.style.top = "0%";
                }}
                onMouseLeave={() => {
                  const a = document.querySelector(".meds .p1");
                  const b = document.querySelector(".meds .p2");
                  a.style.top = "0";
                  b.style.top = "100%";
                }}
              >
                <p className="absolute top-0 left-0 p1 duration-700">
                  Medicines
                </p>
                <p className=" absolute top-full p2 duration-700">Medicines</p>
              </a>
            </li>

            <li className="relative w-[11vw] h-14 overflow-hidden flex flex-col max-[640px]:w-[25vw]">
              <a
                href="/"
                className="text-5xl max-[640px]:text-[6vw] bg-black text-white after:absolute after:h-[2px] after:w-full after:bg-white after:top-[calc(100%-2px)] after:-left-full hover:after:left-0 after:duration-1000 after:ease-out Doctors"
                onMouseEnter={() => {
                  const a = document.querySelector(".Doctors .p1");
                  const b = document.querySelector(".Doctors .p2");
                  a.style.top = "-100%";
                  b.style.top = "0%";
                }}
                onMouseLeave={() => {
                  const a = document.querySelector(".Doctors .p1");
                  const b = document.querySelector(".Doctors .p2");
                  a.style.top = "0";
                  b.style.top = "100%";
                }}
              >
                <p className="absolute top-0 left-0 p1 duration-700">Doctors</p>
                <p className=" absolute top-full p2 duration-700">Doctors</p>
              </a>
            </li>

            <li className="relative w-[12vw] h-14 overflow-hidden flex flex-col max-[640px]:w-[25vw]">
              <a
                href="/"
                className="text-5xl max-[640px]:text-[6vw] bg-black text-white after:absolute after:h-[2px] after:w-full after:bg-white after:top-[calc(100%-2px)] after:-left-full hover:after:left-0 after:duration-1000 after:ease-out Contacts"
                onMouseEnter={() => {
                  const a = document.querySelector(".Contacts .p1");
                  const b = document.querySelector(".Contacts .p2");
                  a.style.top = "-100%";
                  b.style.top = "0%";
                }}
                onMouseLeave={() => {
                  const a = document.querySelector(".Contacts .p1");
                  const b = document.querySelector(".Contacts .p2");
                  a.style.top = "0";
                  b.style.top = "100%";
                }}
              >
                <p className="absolute top-0 left-0 p1 duration-700">
                  Contacts
                </p>
                <p className=" absolute top-full p2 duration-700">Contacts</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative h-6 w-9 overflow-hidden self-end menu justify-self-end">
        <button
          className={`${
            isOpen ? "text-white" : "text-black"
          } after:absolute after:h-[2px] after:w-full ${
            isOpen ? "after:bg-white" : "after:bg-black"
          } after:top-[calc(100%-2px)] after:-left-full hover:after:left-0 after:duration-1000 after:ease-out home -z-8`}
          onClick={isOpen ? closeMenu : giveMenu}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
