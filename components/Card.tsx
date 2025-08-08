import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Card = ({source,title, para } : {source:string, title:string, para:string}) => {
  return (
    <Link href="/notes-list" className="group relative block bg-black">
  <Image
    alt=""
    src={source}
    width={800}
    height={900}
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
    <p className="text-lg font-medium tracking-widest text-white uppercase">{title}</p>

    <p className="text-xl font-bold text-white sm:text-2xl"></p>

    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
          {para}
        </p>
      </div>
    </div>
  </div>
</Link>
    
  )
}

export default Card