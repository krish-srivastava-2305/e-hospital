import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Page2() {
  useEffect(() => {}, []);
  return (
    <div className="w-full h-screen flex justify-end page2">
      <div className="w-1/2 h-full p-10 flex flex-col gap-14 justify-center items-center">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="h-3/4 w-[54%] rounded-3xl image-div overflow-hidden"
        >
          <Image
            className="image"
            src={
              "https://images.unsplash.com/photo-1512069938357-89703bda53ba?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={400}
            height={500}
          ></Image>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="overflow-hidden w-96"
        >
          <h3>
            "Health is the greatest possession. Contentment is the greatest
            treasure. Confidence is the greatest friend. Non-being is the
            greatest joy." - Lao Tzu
          </h3>
        </motion.div>
      </div>
    </div>
  );
}

export default Page2;
