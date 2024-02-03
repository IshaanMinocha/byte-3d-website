import React, { useEffect } from 'react'
import Hero from '../components/Hero';

export default function Home({setProgress}) {

  useEffect(()=>{
    setProgress(20);
    setTimeout(()=>{
      setProgress(100);
    }, 500)
  }, [])
  return (
    <>
    <Hero/>
    </>
  )
}