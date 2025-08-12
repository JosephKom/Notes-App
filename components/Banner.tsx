"use client"
import Link from 'next/link'
import React from 'react'
import AuthButton from './AuthButton'
import { login, logout } from '../lib/auth-actions'
import { useSession } from 'next-auth/react';
import SignedInBanner from './SignedInBanner';
import SignedOutBanner from './SignedOutBanner';

const Banner = () => {
  const { data: session, status } = useSession();
  if(session){
  return (
    <SignedInBanner />
  )
}else{
  return(
    <SignedOutBanner />
  )
}
}

export default Banner