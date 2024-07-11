import React from 'react'
import Card from './Card'

function Foreground() {
  return (
    <div className='relative z-10 flex flex-wrap gap-4 p-4'>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Foreground