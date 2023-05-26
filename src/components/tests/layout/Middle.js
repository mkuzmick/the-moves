// import React from 'react'

export default function Middle(props) {
  return (
    <div class="flex justify-center items-center h-screen">
      <div class="text-center bold text-gray-900 font-black text-5xl md:text-7xl align-middle transition-text duration-1000">{props.children}</div>
    </div>
  )
}

