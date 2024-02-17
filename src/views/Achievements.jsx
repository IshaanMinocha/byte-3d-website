import React, { useEffect } from 'react'
import ParticleRing from '../components/ParticleRing';

export default function Achievements({setProgress}) {

  useEffect(()=>{
    setProgress(20);
    setTimeout(()=>{
      setProgress(100);
    }, 500)
  }, [])
  return (
    <ParticleRing title = "Achievements"/>
  )
}
