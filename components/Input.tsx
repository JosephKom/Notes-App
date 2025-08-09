"use client"
import React, { useState } from 'react'

interface Prop {
  title: string,
  setTitle: (value: string) => void;
};


const Input = ({title,setTitle } : Prop ) => {


  return (
   <label htmlFor="Title">
  <span className="text-xl font-medium text-black-700"> Note Title </span>

  <input
    type="text"
    id="title"
    className="mt-0.5 w-100 h-10 rounded border-black border-2 shadow-lg sm:text-lg p-2"
    onChange={(e) => setTitle(e.target.value)}
    value={title}
  />
</label>
  )
}

export default Input