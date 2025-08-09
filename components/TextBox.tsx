"use client"
import React, { useState } from 'react'

interface Prop {
  note: string,
  setNote: (value: string) => void
}

const TextBox = ({note, setNote}: Prop) => {
 
  return (
    <div>
  <label htmlFor="Notes">
    <span className="text-3xl font-semibold text-black "> New Note </span>

    <textarea
      id="Notes"
      className="mt-0.5 w-full text-5xl resize-none rounded border-black border-4 shadow-xl  sm:text-sm p-3"
      rows={10}
      value={note}
      onChange={(e) => setNote(e.target.value)}
    ></textarea>
  </label>

</div>
  )
}

export default TextBox