import React from "react";
import { motion } from "framer-motion";

function Page3() {
  return (
    <div className="h-screen w-full p-10">
      <div className="h-full w-full rounded-3xl overflow-hidden">
        <motion.video
          initial={{ y: 500 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          src="https://s3u.tmimgcdn.com/u2378315/2003025-tm.mp4"
          muted
          autoPlay
          loop
        ></motion.video>
      </div>
    </div>
  );
}

export default Page3;
