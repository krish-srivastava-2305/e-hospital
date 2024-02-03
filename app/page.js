"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import NavBar from "./components/NavBar";

const page = () => {
  return (
    <div className="min-h-screen w-full bg-slate-400">
      <NavBar />
      {/* <Canvas>
        <mesh>
          <torusKnotGeometry />
          <meshStandardMaterial color="green"/>
          <OrbitControls/>
        </mesh>
      </Canvas> */}
    </div>
  );
};

export default page;
