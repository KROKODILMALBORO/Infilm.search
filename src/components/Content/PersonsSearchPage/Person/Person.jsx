import React from 'react'

const Person = (props) => {
    if (!props.person) {

        return <div className='spinner-grow text-light p-4 m-4'></div>
    }

    return (
        <div>
            <span>{props.person.nameRu}</span>
        </div>
    )
}

export default Person
