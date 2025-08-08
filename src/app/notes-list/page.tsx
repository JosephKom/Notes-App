import React from 'react'
import NoteCard from '../../../components/NoteCard'
import AddNote from '../../../components/AddNote'

const page = () => {
  return (
    <>
        <div className='text-center'>
            <h1 className='text-6xl font-serif '>Welcome Back!</h1>
            <p>click a note to view it or create a new one!</p>
        </div>


        <div className='flex flex-row flex-wrap m-5 gap-3 justify-center'>
            <NoteCard />
            <NoteCard />
            <NoteCard />
        </div>

        <div className='flex flex-row justify-center m-10'>
            <AddNote />
        </div>
    </>
  )
}

export default page