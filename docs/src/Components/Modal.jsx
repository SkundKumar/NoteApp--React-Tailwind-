import React from 'react'
import ExpandableNote from './ExpandableNote'
function Modal() {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
    <ExpandableNote />
    </div>
  )
}

export default Modal