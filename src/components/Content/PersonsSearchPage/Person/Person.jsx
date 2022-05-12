import React from 'react'
import {Link} from 'react-router-dom'

import linkHover from '../../ui/linkHover/linkHover.module.css'

const Person = (props) => {
    if (!props.person) {

        return <div className='spinner-grow text-light p-4 m-4'></div>
    }

    return (
        <Link
            className='col-2 text-decoration-none mx-3'
            type='button'
            to={`/persons/${props.person.kinopoiskId}`}
        >
            <div className='d-flex justify-content-center'>
                <img
                    className={`rounded shadow p-2 my-1 ${linkHover.linkPerson}`}
                    src={props.person.posterUrl}
                    width='165'
                    alt='...'
                />
            </div>
            <div className={`rounded-end border-start border-secondary shadow px-2 mx-3 mb-2 ${linkHover.linkPerson}`}>
                <div>
                <div className='text-light'>
                    <span>{props.person.nameRu}</span>
                </div>
                </div>
            </div>
        </Link>
    )
}

export default Person
