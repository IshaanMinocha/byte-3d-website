import React from 'react'
import WorkCard from './WorkCard'
import Header from './Header'

function Work() {
    return (
        <>
            <div className='bg-black'>
                <Header heading={"About"} subheading={"our goals..."} />
                <div className='flex justify-around w-screen pb-20 gap-2 flex-wrap'>
                    <WorkCard image={'dev.png'} content={"Development"} info={'Developing industry level projects'} />
                    <WorkCard image={'research.png'} content={"Research"} info={'Research papers and Feasibility'} />
                    <WorkCard image={'inn.jpg'} content={"Innovation"} info={'Creating new solutions for different use cases'} />
                </div>
            </div>
        </>
    )
}

export default Work