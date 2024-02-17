import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import ParticleRing from '../components/ParticleRing';

export default function About({ setProgress }) {

  useEffect(() => {
    setProgress(20);
    setTimeout(() => {
      setProgress(100);
    }, 400)
  }, [])
  return (
    <>
      <ParticleRing title = "About"/>
    </>
  )
}
