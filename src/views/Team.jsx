import React, { useEffect } from 'react'

export default function Team({setProgress}) {

  useEffect(()=>{
    setProgress(20);
    setTimeout(()=>{
      setProgress(100);
    }, 500)
  }, [])
  return (
    <div className='p-[10%] h-screen'>
      <h1 className='text-green-500 text-3xl text-center'>Team Announcement on 29 Feb after Final Recruitment</h1>
    </div>
  )
}