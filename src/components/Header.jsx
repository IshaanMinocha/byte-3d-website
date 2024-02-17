import React from 'react'

function Header({ heading, subheading }) {
  return (
    <>
      <div className='py-10 text-center'>
        <div className='text-5xl font-bold font-heading mb-5 tracking-widest text-light'>{heading}</div>
        <div className='text-2xl font-semibold font-subhead tracking-wider text-yellow'>{subheading}</div>
      </div>
    </>
  )
}

export default Header