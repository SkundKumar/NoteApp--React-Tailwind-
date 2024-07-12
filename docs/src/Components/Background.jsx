import React from "react";
import { motion } from "framer-motion";
function Background() {
  return (
    <div className="fixed z-[2] w-full h-screen">
      {/* to center the Name of the project */}
      <h1 className="flex justify-center text-[5vw] leading-none tracking-tight font-semibold text-zinc-900">
        NOTES
      </h1>
    </div>
  );
}

export default Background;