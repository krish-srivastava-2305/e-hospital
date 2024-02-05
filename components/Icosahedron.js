"use client";
import { useFrame } from "@react-three/fiber";
import { use, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Icosahedron() {
  const torusRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(torusRef.current.position, {
      x: -3.8,
      y: -0.8,
      z: 0,
      scrollTrigger: {
        trigger: ".movingKnot",
        scrub: true,
      },
      duration: 1,
    });

    gsap.to(torusRef.current.rotation, {
      x: Math.PI * 2,
      y: Math.PI * 2,
      z: Math.PI * 2,
      repeat: -1,
      duration: 5,
      ease: "none",
    });
  }, []);

  return (
    <group position={[0, 0, 0]} scale={0.65}>
      <mesh
        castShadow={true}
        position={[1, 4.5, 0]}
        ref={torusRef}
        className="movingKnot"
      >
        <torusKnotGeometry args={[0.4, 0.1, 128, 15]} />
        <meshStandardMaterial roughness={0.5} metalness={0.7} />
      </mesh>
    </group>
  );
}

export default Icosahedron;
