import React from 'react'
import NoteCard from '../../../components/NoteCard'

const page = () => {
  return (
    <>
        <div className='flex flex-row flex-wrap m-5 gap-3 justify-center'>
            <NoteCard />
            <NoteCard />
            <NoteCard />
        </div>
    </>
  )
}

export default page