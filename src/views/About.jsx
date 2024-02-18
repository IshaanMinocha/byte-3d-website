import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import ParticleRing from '../components/ParticleRing';
import ParticleRingAbout from '../components/ParticleRingAbout';

export default function About({ setProgress }) {

  useEffect(() => {
    setProgress(20);
    setTimeout(() => {
      setProgress(100);
    }, 400)
  }, [])
  return (
    <>
      <ParticleRingAbout title = "About"/>
    </>
  )
}
