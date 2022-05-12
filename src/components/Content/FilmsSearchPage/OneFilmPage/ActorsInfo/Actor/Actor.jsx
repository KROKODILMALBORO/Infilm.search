import React from 'react'
import {Link} from 'react-router-dom'

import linkHover from '../../../../ui/linkHover/linkHover.module.css'

const Actor = (props) => {
    if (!props.person) {

        return <div className='spinner-grow text-light p-4 m-4'></div>
    }

    return (
        <Link
            className='col-2 mb-2 text-decoration-none'
            type='button'
            to={`/persons/${props.person.staffId}`}
        >
            <div className='d-flex justify-content-center mx-2'>
                <img
                    className={`rounded shadow p-1 my-1 ${linkHover.informativeBlock}`}
                    src={props.person.posterUrl}
                    width='165'
                    alt='...'
                />
            </div>
            <div className={`rounded-end border-start border-secondary shadow px-2 mx-3 ${linkHover.informativeBlock}`}>
                <div className='text-light'>
                    <span>{props.person.nameRu}</span>
                </div>
                <div className='text-light text-opacity-50'>
                    <span>{props.person.description}</span>
                </div>
            </div>
        </Link>
    )
}

export default Actor
