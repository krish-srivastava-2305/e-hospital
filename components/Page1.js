import React from "react";
import { motion } from "framer-motion";

function Page1() {
  return (
    <div className=" h-screen w-full p-8 flex flex-col justify-center items-start bg-transparent">
      <div className="overflow-hidden">
        <motion.h1
          className="text-[9vw] text-[#1c1b1bdf]"
          initial={{ y: 160 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          MediTrek
        </motion.h1>
      </div>
      <div className="overflow-hidden">
        <motion.p
          className="text-2xl text-[#1c1b1bdf]"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          "Your Health, Our Priority."
        </motion.p>
      </div>
      <div className="w-1/2 overflow-hidden">
        <motion.p
          className="text-lg text-[#1c1b1bdf] mt-4"
          initial={{ y: 170 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to MediaTrek, your premier destination for online healthcare
          solutions. Our e-hospital seamlessly integrates cutting-edge
          technology with compassionate care to provide convenient and
          accessible medical services from the comfort of your home. With a team
          of dedicated professionals and a commitment to excellence, we're
          revolutionizing the way healthcare is delivered. Experience the future
          of wellness with us today.
        </motion.p>
      </div>
    </div>
  );
}

export default Page1;
