import React from 'react'

function Note(props) {
  return (
    <div className="mt-5 mr-3 font-semibold overflow-y-auto h-full hide-scrollbar">
    <h1 className="text-xl bg-zinc-700/25 rounded-full flex justify-center items-center mb-3">{props.title}</h1>
    <p>
        {props.content}
      </p>
    </div>
    
  )
}

export default Note