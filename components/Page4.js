import { motion } from "framer-motion";
import Card from "./Card";

function Page4() {
  return (
    <div className="flex flex-col h-screen w-full">
      <div className="h-1/3 w-full pt-5 overflow-hidden">
        <motion.h1
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.75 }}
          className="text-[8vw] text-center"
        >
          What we do?
        </motion.h1>
      </div>
      <div className="h-2/3 w-full flex justify-evenly gap-16 items-center p-6">
        <Card
          src={"/Medicines"}
          img={
            "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <Card
          src={"/Appoinments"}
          img={
            "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <Card
          src={"/KnowUs"}
          img={
            "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </div>
    </div>
  );
}

export default Page4;
