import React, { useEffect } from 'react'
import Hero from '../components/Hero';
import Work from '../components/Work';
import Fields from '../components/Fields';

export default function Home({ setProgress }) {

  useEffect(() => {
    setProgress(20);
    setTimeout(() => {
      setProgress(100);
    }, 500)
  }, [])
  return (
    <>
      <Hero />
      <Work />
      <Fields />
    </>
  )
}