import React from 'react'

import Fact from './Fact'

import scroll from './InterestingFacts.module.css'

const InterestingFacts = (props) => {
    return (
        <div className='bg-secondary bg-opacity-10 rounded shadow p-2 mt-3'>
            <div className={scroll.scroll}>
                {
                    props.facts.map((fact, index) =>
                        <Fact
                            key={index}
                            fact={fact}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default InterestingFacts
