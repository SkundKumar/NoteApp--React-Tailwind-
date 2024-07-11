import React from 'react'
import ExpandableNote from './ExpandableNote'
import Card from './Card';
function Modal({onClose}) {
  const modalRef = React.useRef();
  const closeModal = (e)=>{
    if(modalRef.current === e.target){
      onClose()
    }
  }
  return (
    <div ref={modalRef} onClick={closeModal} className='z-20 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
    <ExpandableNote />
    </div>
  )
}

export default Modal