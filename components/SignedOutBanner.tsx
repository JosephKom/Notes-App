"use client"
import Link from 'next/link'
import React from 'react'
import { login, logout } from '../lib/auth-actions'

const SignedOutBanner = () => {
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
        You're not signed in.<br></br>
        Save all your notes in one place by signing in with Google
      </p>

      <div className="mt-4 flex justify-center gap-4 sm:mt-6">
        <button
          className="inline-block rounded border border-red-600 bg-red-600 px-8 py-3 font-medium text-white shadow-sm transition-colors hover:bg-red-800 cursor-pointer"
          onClick={() => login()}
        >
          Sign In
        </button>

        <a
          className="inline-block rounded border border-gray-400 px-8 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
          href="#"
        >
          Learn More
        </a>
      </div>
      
    </div>
  </div>
</section>
  )
}

export default SignedOutBanner