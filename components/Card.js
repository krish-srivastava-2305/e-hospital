import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

function Card({ src, img }) {
  const [hoveredl, setHoveredl] = useState(false);
  const [hoveredr, setHoveredr] = useState(false);

  // useEffect(() => {
  //   const handleMouseEnter = (event) => {
  //     const card = event.currentTarget;
  //     const mouseX = event.clientX - card.getBoundingClientRect().left;
  //     const cardWidth = card.offsetWidth;

  //     const moveDistance = mouseX < cardWidth / 2 ? 5 : -5;

  //     gsap.to(".moving-img", {
  //       x: moveDistance,
  //       duration: 0.3,
  //     });
  //   };

  //   const handleMouseLeave = () => {
  //     gsap.to(".moving-img", {
  //       x: 0,
  //       duration: 0.3,
  //     });
  //   };

  //   const card = document.querySelector(".custom-shadow");
  //   card.addEventListener("mouseenter", handleMouseEnter);
  //   card.addEventListener("mouseleave", handleMouseLeave);

  //   return () => {
  //     card.removeEventListener("mouseenter", handleMouseEnter);
  //     card.removeEventListener("mouseleave", handleMouseLeave);
  //   };
  // }, []);

  return (
    <div className="h-[85%] w-[20%] rounded-3xl custom-shadow relative flex overflow-hidden">
      <div
        className="h-full w-1/2 left"
        onMouseEnter={() => setHoveredl((prev) => !prev)}
        onMouseLeave={() => setHoveredl((prev) => !prev)}
      ></div>
      <div
        className="h-full w-1/2 right"
        onMouseEnter={() => setHoveredr((prev) => !prev)}
        onMouseLeave={() => setHoveredr((prev) => !prev)}
      ></div>
      <Link href={src}>
        <Image
          src={img}
          width={300}
          height={300}
          className={`moving-img absolute scale-110 top-0 left-0 -z-10 ${
            hoveredl
              ? "translate-x-3 scale-100 duration-500 ease-in-out transition-all"
              : ""
          } ${
            hoveredr
              ? "-translate-x-3 scale-105 duration-500 ease-in-out transition-all"
              : ""
          }`}
        />
      </Link>
    </div>
  );
}

export default Card;
