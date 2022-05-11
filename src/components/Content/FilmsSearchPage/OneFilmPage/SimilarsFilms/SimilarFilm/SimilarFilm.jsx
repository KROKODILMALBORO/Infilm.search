import React from 'react'
import {Link} from 'react-router-dom'

import linkHover from '../../../../ui/linkHover/linkHover.module.css'

const SimilarFilm = (props) => {
    if (!props.similarFilm) {

        return <div className='spinner-grow text-light p-4 m-4'></div>
    }

    return (
        <Link
            className='col-2 mb-2 text-decoration-none'
            type='button'
            to={`/films_search/one_film/${props.similarFilm.filmId}`}
        >
            <div className='d-flex justify-content-center'>
                <img
                    className={`rounded shadow p-1 my-1 ${linkHover.informativeBlock}`}
                    src={props.similarFilm.posterUrl}
                    width='165'
                    alt='...'
                />
            </div>
            <div className={`rounded-end border-start border-secondary shadow px-2 mx-3 mb-2 ${linkHover.informativeBlock}`}>
                <div className='text-light'>
                    <span>{props.similarFilm.nameRu}</span>
                </div>
            </div>
        </Link>
    )
}

export default SimilarFilm
