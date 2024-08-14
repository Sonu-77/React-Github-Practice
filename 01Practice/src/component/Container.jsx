import React from 'react'

export default function Container(props) {
  return (
    <div className='flex flex-col items-center border-neutral-500 border-2 w-2/3 p-5'>{props.children}</div>
  )
}

