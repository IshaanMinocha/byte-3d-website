import React, { useEffect } from 'react'

export default function Contact({setProgress}) {

  useEffect(()=>{
    setProgress(20);
    setTimeout(()=>{
      setProgress(100);
    }, 500)
  }, [])
  return (
    <div>Contact</div>
  )
}