"use client"
import React, { useState } from 'react'

const Input = ({title}: {title:string}) => {
    const [input, setInput] = useState("");


  return (
   <label htmlFor="Email">
  <span className="text-xl font-medium text-black-700"> {title} </span>

  <input
    type="text"
    id="title"
    className="mt-0.5 w-100 h-10 rounded border-black border-2 shadow-lg sm:text-lg"
    onChange={(e) => setInput(e.target.value)}
    value={input}
  />
</label>
  )
}

export default Input