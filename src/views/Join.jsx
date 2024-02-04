import React, { useEffect } from 'react'

export default function Join({setProgress}) {

  useEffect(()=>{
    setProgress(20);
    setTimeout(()=>{
      setProgress(100);
    }, 500)
  }, [])
  return (
    <div>Join</div>
  )
}
