import Swiping from "./Swiping";
import { motion } from "framer-motion";

function Page5() {
  return (
    <div className="h-[125vh] w-full flex flex-col p-10 overflow-hidden">
      <div className="h-[25vh] w-full">
        <motion.h1
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.75 }}
          className="text-[8vw] text-center"
        >
          Our Work
        </motion.h1>
      </div>
      <div className="h-[100vh] w-full rounded-3xl overflow-hidden">
        <Swiping></Swiping>
      </div>
    </div>
  );
}
export default Page5;
