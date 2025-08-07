"use client"
import React, { useState } from 'react'

const TextBox = () => {
    const [note, setNote] = useState("");
 
  return (
    <div>
  <label htmlFor="Notes">
    <span className="text-3xl font-semibold text-black "> New Note </span>

    <textarea
      id="Notes"
      className="mt-0.5 w-full text-5xl resize-none rounded border-black border-2 shadow-xl  sm:text-sm"
      rows={20}
      value={note}
      onChange={(e) => setNote(e.target.value)}
    ></textarea>
  </label>

  <div className="mt-1.5 flex items-center justify-end gap-2">
    <button
      type="button"
      className="rounded bg-red-600 border border-transparent px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-red-800"
      onClick={()=> setNote("")}

    >
      Clear
    </button>

    <button
      type="button"
      className="rounded border border-gray-300 px-3 py-1.5 text-sm font-medium text-black shadow-sm transition-colors hover:bg-gray-100"
    >
      Create Note
    </button>
  </div>
</div>
  )
}

export default TextBox