
import React, { useEffect, useState } from 'react'
import NoteCard from '../../../components/NoteCard';
import AddNote from '../../../components/AddNote';
import { getServerSession } from "next-auth";
import { connectToDB } from '../../../lib/mongodb';
import { Note } from '../../../models/Note';
import { authOptions } from '../../../lib/auth';
import Link from 'next/link';


const page = async () => {
  const session = await getServerSession(authOptions);
  
  if(!session?.user?.email){
    return <p>You must be signed in to view or create notes.</p>
  }

  await connectToDB();
  const notes = await Note.find({ userEmail: session.user.email}).lean();

  if(notes.length === 0){
    return (
    <>
    <p>Create your first note.</p>
     <div className='flex flex-row justify-center m-10'>
            <AddNote />
    </div>

    </>
)
  }


  return (
    <>
        <div className='text-center'>
            <h1 className='text-6xl font-serif '>Welcome Back!</h1>
            <p>click a note to view it or create a new one!</p>
        </div>

        <div>
          {notes.map((note:any) =>(
            <Link key={note._id} href={`/notes-list/${note._id}`}>
                <NoteCard note={note} />
            </Link>
          ))}
        </div>
        
        <div className='flex flex-row justify-center m-10'>
            <AddNote />
        </div>
    </>
  )
}

export default page