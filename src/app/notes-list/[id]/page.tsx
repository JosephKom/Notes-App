
import React, { useEffect, useState } from 'react'
import NoteCard from '../../../../components/NoteCard';
import AddNote from '../../../../components/AddNote';
import { getServerSession } from "next-auth";
import { connectToDB } from '../../../../lib/mongodb';
import { Note } from '../../../../models/Note';
import { authOptions } from '../../../../lib/auth';
import { Types } from 'mongoose';

interface Props{
    params: {id: string};
};

interface NoteType {
  _id: string;
  title: string;
  note: string;
  userEmail: string;
}


const page = async ({params}: Props) => {
  console.log("Before getServerSession");
  const session = await getServerSession(authOptions);
  console.log("After getServerSession", session);
  
  if(!session?.user?.email){
    return <p>Sign in to view note.</p>
  }

  await connectToDB();
 const note = await Note.findOne({
  _id: new Types.ObjectId(params.id),
  userEmail: session.user.email,
}).lean<NoteType | null>();
console.log("Note found:", note);

  if(!note){
    return <p>Note not found.</p>
  }


  return (
    <>
        <h1>{note.title}</h1>
        <p>{note.note}</p>
    </>
  )
}

export default page