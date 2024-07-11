import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoIosCloudDownload } from "react-icons/io";
import { GrExpand } from "react-icons/gr";
import Modal from './Modal';
import ExpandableNote from './ExpandableNote';
import { motion } from 'framer-motion'; 
function Card() {
 
    const[showModal,setModal]=React.useState(false)
  return (
    <div>
      
     <div className=' relative w-60 h-72 rounded-[50px] bg-zinc-900 text-zinc-500 px-6 py-7 overflow-hidden'>
     <FaRegFileAlt/>
     <div className='mt-5 mr-3 font-semibold overflow-y-auto h-full hide-scrollbar'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aperiam vel unde ipsa quo sint eaque, dolores possimus qui suscipit?
        </p>
      </div>
    <div className='Footer absolute w-full bottom-0 left-0  text-emerald-200'>
      <div className=' flex items-center justify-end py-2 px-5 mb-3'>
     
      
        
      <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.8}}><IoIosCloudDownload size='1.2em'/></motion.button>
        
        
  
      </div>
      <div className='tag w-full rounded-[5px] py-2  bg-emerald-400 flex  justify-center '>
      <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.8}} onClick={()=>setModal(true)} className='flex gap-x-28 items-center'>
        <h6 className='text-white'>Expand</h6>
      <GrExpand color='white'/>
      </motion.button>
      </div>

      

    </div>
     </div>
      {showModal && <Modal onClose={()=> setModal(false)}/>}
         
    </div>
  )
}

export default Card
  