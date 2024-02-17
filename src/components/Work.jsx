import React from 'react'
import WorkCard from './WorkCard'
import Header from './Header'

function Work() {
    return (
        <>
            <Header heading={"About"} subheading={"our goals..."} />
            <div className='flex justify-around w-screen pb-20'>
                <WorkCard image={'byte-logo-main.png'} content={"Development"} info={'Developing industry level projects'} />
                <WorkCard image={'byte-logo-main.png'} content={"Research"} info={'reasearching about projects and their feasibility'} />
                <WorkCard image={'byte-logo-main.png'} content={"Innovation"} info={'innovating new things as per various use cases'} />
            </div>
        </>
    )
}

export default Work