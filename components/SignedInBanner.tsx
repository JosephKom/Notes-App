"use client"
import Link from 'next/link'
import React from 'react'
import AuthButton from './AuthButton'
import { login, logout } from '../lib/auth-actions'
import { signOut, useSession } from 'next-auth/react';

const SignedInBanner = () => {
    const { data: session, status } = useSession();
  return (
     <section className="bg-white lg:grid lg:h-screen lg:place-content-center h-100">
  <div className="mx-auto w-screen max-w-screen-xl px-4 py-5 sm:px-6 sm:py-5 lg:px-8 lg:py-5">
    <div className="mx-auto max-w-prose text-center">
      <h1 className="text-8xl font-bold text-gray-900 sm:text-6xl font-serif">
        All Your
        <strong className="text-red-600"> Notes </strong>
        In One Great Place
      </h1>

      <p className="mt-4 text-base text-pretty text-black sm:text-lg/relaxed font-serif">
        You're Signed In!
      </p>

      <p className='text-3xl font-bold font-serif'>
        Welcome back {session?.user?.name}
      </p>

      <div className="mt-4 flex justify-center gap-4 sm:mt-6">
        <a
          className="inline-block rounded border border-red-600 bg-red-600 px-8 py-3 font-medium text-white shadow-sm transition-colors hover:bg-red-800"
          href="/create-note"
        >
          Create Note
        </a>

        <button
          className="inline-block rounded border border-gray-600 bg-gray-100 px-8 py-3 font-medium text-black shadow-sm transition-colors hover:bg-gray-200 cursor-pointer"
          onClick={() => logout()}
        >
          Sign Out
        </button>

    
      </div>
    
    </div>
  </div>
</section>
  )
}

export default SignedInBanner