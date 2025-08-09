"use client";
import React, { useState } from "react";
import Input from "../../../components/Input";
import TextBox from "../../../components/TextBox";

const page = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const handleNote = async () => {
    if (!title || !note) return alert("Both Fields Required");

    try {
      const res = await fetch("/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, note }),
      });

      if (!res.ok) throw new Error("Failed to create note");

      const newNote = await res.json();
      console.log("Note Created:", newNote);

      setTitle("");
      setNote("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="border border-black font-serif flex flex-col ">
      <div className="flex flex-row gap-10 justify-center mt-10 items-center">
        <Input title={title} setTitle={setTitle} />
      </div>
      <div className="flex flex-col flex-wrap h-200 justify-center m-10 text-center">
        <TextBox note={note} setNote={setNote} />
        <div className="mt-1.5 flex items-center justify-end gap-2">
          <button
            type="button"
            className="rounded bg-red-600 border border-transparent px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-red-800"
            onClick={() => setNote("")}
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
    </form>
  );
};

export default page;
