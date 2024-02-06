"use client";
import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import ThreeD from "../components/3D";
import Page1 from "../components/Page1.js";
import Page2 from "../components/Page2";
import Page3 from "../components/Page3";
import Page4 from "../components/Page4";
import Page5 from "../components/Page5";
import Page6 from "../components/Page6";

import gsap from "gsap";

const page = () => {
  useEffect(() => {
    gsap.to(".custom-shadow", {
      y: 25,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  });
  return (
    <div className="min-h-screen w-full relative flex flex-col justify-center">
      <NavBar />
      <ThreeD />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
    </div>
  );
};

export default page;
