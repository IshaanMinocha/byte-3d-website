import React, { useEffect } from 'react'

export default function Achievements({setProgress}) {

  useEffect(()=>{
    setProgress(20);
    setTimeout(()=>{
      setProgress(100);
    }, 500)
  }, [])
  return (
    <div>Achievements</div>
  )
}
