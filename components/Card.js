import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

function Card({ src, img }) {
  useEffect(() => {
    const handleMouseEnter = (event) => {
      const card = event.currentTarget;
      const mouseX = event.clientX - card.getBoundingClientRect().left;
      const cardWidth = card.offsetWidth;

      const moveDistance = mouseX < cardWidth / 2 ? 5 : -5;

      gsap.to(".moving-img", {
        x: moveDistance,
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(".moving-img", {
        x: 0,
        duration: 0.3,
      });
    };

    const card = document.querySelector(".custom-shadow");
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="h-[85%] w-[20%] rounded-3xl custom-shadow overflow-hidden relative">
      <Link href={src}>
        <Image
          src={img}
          width={300}
          height={300}
          className="moving-img absolute scale-110"
        />
      </Link>
    </div>
  );
}

export default Card;
