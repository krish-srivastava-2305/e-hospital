import React from "react";
import { motion } from "framer-motion";

function Page6() {
  return (
    <div className="h-screen w-full bg-black">
      <div className="h-1/2 w-full overflow-hidden">
        <motion.h1
          className="text-[20vw] text-white text-center"
          initial={{ y: 400 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          MediTrek
        </motion.h1>
      </div>
      <div className="h-[44%] w-full  flex justify-evenly items-center border-b-2 border-white">
        <div className="h-full w-1/3">
          <p></p>
        </div>
        <div className="h-full w-1/3">
          <p></p>
        </div>
      </div>
      <div className="h-[6%] flex justify-between p-3">
        <a
          href="https://www.linkedin.com/in/krish-srivastava-83629624b/"
          target="_blank"
          className="text-white"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/krish-srivastava-2305/"
          target="_blank"
          className="text-white"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Page6;
