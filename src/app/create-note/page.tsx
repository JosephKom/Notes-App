import React from 'react'
import Input from '../../../components/Input'
import TextBox from '../../../components/TextBox'

const page = () => {
  return (
    <form className='border border-black font-serif flex flex-col '>
        <div className='flex flex-row gap-10 justify-center mt-10 items-center'>
            <Input title={"Note Title"}/>
            <Input title={"Date"}/>
        </div>
        <div className='flex flex-col flex-wrap h-200 justify-center m-10 text-center'>
            <TextBox />
        </div>
    </form>
  )
}

export default page