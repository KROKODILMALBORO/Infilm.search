import React from 'react'
import {Link} from 'react-router-dom'

import linkHover from '../../../../ui/linkHover/linkHover.module.css'

const FilmByPerson = (props) => {
    if (!props.filmByPerson.nameRu) {

        return
    }

    return (
        <Link
            className='col-4 mb-2 text-decoration-none'
            type='button'
            to={`/films/${props.filmByPerson.filmId}`}
        >
            {
                props.filmByPerson ?
                <div>
                    <div className={`rounded-end border-start border-secondary shadow px-2 p-1 mx-2 mt-2 ${linkHover.informativeBlock}`}>
                        <div className='text-light pt-2'>
                            <h5>{props.filmByPerson.nameRu}</h5>
                        </div>
                        <div className='text-light text-opacity-25'>
                            <span>{props.filmByPerson.description}</span>
                        </div>
                    </div>
                </div> :
                <div className='spinner-grow text-light p-4 m-2'></div>
            }
        </Link>
    )
}

export default FilmByPerson
