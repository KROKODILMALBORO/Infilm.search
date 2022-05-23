import React from 'react'
import {Link} from 'react-router-dom'

import linkHover from '../../ui/linkHover/linkHover.module.css'

const Person = (props) => {
    return (
        <Link
            className='col-2 text-decoration-none mx-3'
            to={`/persons/${props.person.kinopoiskId}`}
            type='button'
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
                <div className='text-light'>
                    <span>{props.person.nameRu}</span>
                </div>
            </div>
        </Link>
    )
}

export default Person
