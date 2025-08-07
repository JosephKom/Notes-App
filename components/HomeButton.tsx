import React from 'react'

const HomeButton = () => {
  return (
   <a
  className="group relative inline-block overflow-hidden border border-red-600 px-8 py-3 focus:ring-3 focus:outline-hidden"
  href="/create-note"
>
  <span
    className="absolute inset-x-0 bottom-0 h-[2px] bg-red-600 transition-all group-hover:h-full"
  ></span>

  <span
    className="relative text-sm font-medium text-red-600 transition-colors group-hover:text-white"
  >
    Get Started
  </span>
</a>
  )
}

export default HomeButton