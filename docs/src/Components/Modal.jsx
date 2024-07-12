import React from "react";
import ExpandableNote from "./ExpandableNote";
import Card from "./Card";
import notes from "../note";
import notess from "../noteModal";

{/* modal*/}
function Modal({ onClose, title, content }) {
  {/* ref function that helps in closing the modal when clicked outside it*/}
  const modalRef = React.useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };
  
  {/* returning modal*/}
  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="z-20 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      {/* expandableNote*/}
      <ExpandableNote title={title} content={content}/>
    </div>
  );
}

export default Modal;
