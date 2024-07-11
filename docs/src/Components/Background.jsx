import React from "react";
import { motion } from "framer-motion";
function Background() {
  return (
    <div className="fixed z-[2] w-full h-screen">
      {/* to center the Name of the project */}
      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[11vw] leading-none tracking-tight font-semibold text-zinc-900">
        Docs.
      </h1>
    </div>
  );
}

export default Background;