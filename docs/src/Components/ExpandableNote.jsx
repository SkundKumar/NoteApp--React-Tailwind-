import React from "react";
import { motion } from "framer-motion";
import { AiOutlineCloseSquare } from "react-icons/ai";
import Card from "./Card";
import notes from "../note";
import notess from "../noteModal";
function ExpandableNote({ title, content }) {
  return (
    
    <motion.div 
      className="z-20 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >{/* framer animation for the modal*/}
    {/* main white box*/}
      <div className="relative w-[60vw] h-[65vh] bg-zinc-300 rounded-[50px] overflow-hidden">
        {/* the grey overshadow on title*/}
        <div className="flex h-24 w-full justify-between bg-emerald-700/20 ">
        {/* Title*/}
          <h1 className=" px-6 py-6 text-5xl ">{title}</h1>
          
        </div>
        {/* paragraph with the scroll feature*/}
        <div className="h-full overflow-y-auto hide-scrollbar">
          <p className="p-10">
            {content}
          </p>
        </div>
      </div>
      {/*button to close but it dont work now */}
      {/*<motion.button
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.8 }}
        onClick={onClose}
        className="px-[500px]"
      >
        <AiOutlineCloseSquare />
      </motion.button> */}
      
    </motion.div>
  );
}

export default ExpandableNote;
