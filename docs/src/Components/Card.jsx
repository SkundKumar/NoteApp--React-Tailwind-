import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoIosCloudDownload } from "react-icons/io";
import { GrExpand } from "react-icons/gr";
import Modal from "./Modal";
import ExpandableNote from "./ExpandableNote";
import { motion } from "framer-motion";
import Note from "./Note";
import notes from "../note";
import notess from "../noteModal";


function Card({title,content}) {
  {/* useState to toggle the modal/expandableNote */}
  const [showModal, setModal] = React.useState(false);
  return (
    <div>
      {/* card */}
      <div className=" relative w-60 h-72 rounded-[50px] bg-zinc-900 text-zinc-500 px-6 py-7 overflow-hidden">
        <FaRegFileAlt /> {/* Document Logo*/}
        {/* preview content and title */}
        
        <Note title={title} content={content} />
        
        {/* footer with a button to expand and delete*/}
        <div className="Footer absolute w-full bottom-0 left-0  text-emerald-200">
          {/* Delete button...using framer to animate them a little*/}
          <div className=" flex items-center justify-end py-2 px-5 mb-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
            >
              <IoIosCloudDownload size="1.2em" />
            </motion.button>
          </div>
          {/*fotter green strip */}
          <div className="tag w-full rounded-[5px] py-2  bg-emerald-400 flex  justify-center ">
            {/* expand button and icon...using onClick to toggle the useState to open the note*/}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => setModal(true)}
              className="flex gap-x-28 items-center"
            >
              <h6 className="text-white">Expand</h6>
              <GrExpand color="white" />
            </motion.button>
          </div>
        </div>
      </div>
      {/*to open as well as close the modal */}
      {showModal &&  (
    <Modal
      key={title}
      title={title}
      content={content}
      onClose={() => setModal(false)}
    />
  )}

    </div>
  );
}

export default Card;
