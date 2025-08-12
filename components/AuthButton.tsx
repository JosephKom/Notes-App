"use client"
import { useSession, signIn, signOut } from "next-auth/react";

import React from 'react'
import { login, logout } from '../lib/auth-actions'


const AuthButton = () => {
 const { data: session, status } = useSession();

 if(session){

  return (
    <>
        <p>Welcome Back {session.user?.name}</p>
        <button onClick={() => logout()}>Sign Out</button>
    </>
  )
}
else {
  return (
    <>
      <p>You're Not Signed In</p>
      <button onClick={() => login()}>Sign In</button>
    </>
  )
}
}

export default AuthButton