import React, { useEffect } from 'react'
import ParticleRing from '../components/ParticleRing';
import ParticleRingAchievements from '../components/ParticleRingAchievement';

export default function Achievements({setProgress}) {

  useEffect(()=>{
    setProgress(20);
    setTimeout(()=>{
      setProgress(100);
    }, 500)
  }, [])
  return (
    <ParticleRingAchievements title = "Achievements"/>
  )
}
