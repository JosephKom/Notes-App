import React from 'react'
import Input from '../../../components/Input'
import TextBox from '../../../components/TextBox'

const page = () => {
  return (
    <form className='border border-black font-serif'>
        <div className='flex flex-row gap-0 justify-around mt-5'>
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