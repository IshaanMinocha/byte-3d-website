import React, { useEffect } from 'react'

export default function Projects({setProgress}) {

  useEffect(()=>{
    setProgress(20);
    setTimeout(()=>{
      setProgress(100);
    }, 500)
  }, [])
  return (
    <div>Projects</div>
  )
}