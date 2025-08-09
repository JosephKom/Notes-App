"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation' 
import NoteCard from '../../../components/NoteCard'
import AddNote from '../../../components/AddNote'

const page = () => {
    const params = useParams();
    const id = params?.id;
    const [notes, setNotes] = useState([]);
    
    useEffect(() =>{
      const fetchNotes = async () =>{
        try{
          const res = await fetch(`/api/notes/${id}`);
          if(!res) throw new Error("Failed to fetch notes");

          const data = await res.json();
          setNotes(data);
        }catch(err){
          console.error(err);
        }
      };
      if(id)
      fetchNotes();
    }, [id])
  


  return (
    <>
        <div className='text-center'>
            <h1 className='text-6xl font-serif '>Welcome Back!</h1>
            <p>click a note to view it or create a new one!</p>
        </div>

        <div>
          {notes.map((note:any) =>(
            <NoteCard key={note._id} note={note} />
          ))}
        </div>
        
        <div className='flex flex-row justify-center m-10'>
            <AddNote />
        </div>
    </>
  )
}

export default page