import React from 'react'

import Fact from './Fact'

import scroll from './InterestingFacts.module.css'

const InterestingFacts = (props) => {
    return (
        <div className='bg-secondary bg-opacity-10 rounded shadow p-2 mt-3'>
            {
                props.facts &&
                <div className={scroll.scroll}>
                    {
                        props.facts ?
                        props.facts.map((fact, index) =>
                            <Fact
                                key={index}
                                fact={fact}
                            />
                        ) :
                        <div className='spinner-grow text-light p-4 m-4'></div>
                    }
                </div>
            }
        </div>
    )
}

export default InterestingFacts
