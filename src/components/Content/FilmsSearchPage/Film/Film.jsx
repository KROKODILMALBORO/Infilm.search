import React from 'react'
import {Link} from 'react-router-dom'

import {formatGenresToString, formatCountriesToString, formatType} from '../functions'

import linkHover from '../../ui/linkHover/linkHover.module.css'

const Film = (props) => {

    return (
        <div className='d-flex flex-row justify-content-center m-5'>
            <div className='bg-dark bg-opacity-50 rounded shadow'>
                <div className='d-flex flex-row align-items-center justify-content-start'>
                    <img
                        className='rounded-start'
                        src={props.film.posterUrl}
                        width='200'
                        alt='...'
                    />
                    <div className='row w-100 m-1 my-2'>
                        <div className='d-flex align-items-center mt-2 mb-5'>
                            <Link
                                className={`col-10 text-decoration-none border-start border-secondary shadow px-2 ${linkHover.linkFilm}`}
                                type='button'
                                to={`/films/${props.film.kinopoiskId}`}
                            >
                                <h3 className='text-light py-2'>
                                    {
                                        props.film.nameRu ?
                                        props.film.nameRu :
                                        props.film.nameOriginal
                                    }
                                </h3>
                            </Link>
                            <div className='col-2 bg-dark bg-opacity-75 rounded-end shadow pt-1'>
                                <h1 className='text-light text-opacity-75' align='center'>
                                    {
                                        props.film.ratingKinopoisk ?
                                        props.film.ratingKinopoisk :
                                        '-'
                                    }
                                </h1>
                            </div>
                        </div>
                        <div className='col-4 border-end border-secondary'>
                            <h5 className='text-light'>
                                Год выхода
                            </h5>
                        </div>
                        <div className='col-8'>
                            <h5 className='text-light'>
                                {
                                    props.film.year ?
                                    props.film.year :
                                    '(Данные отсутствуют)'
                                }
                            </h5>
                        </div>
                        <div className='col-4 border-end border-secondary'>
                            <h5 className='text-light'>
                                Страна
                            </h5>
                        </div>
                        <div className='col-8'>
                            <h5 className='text-light'>
                                {formatCountriesToString(props.film.countries)}
                            </h5>
                        </div>
                        <div className='col-4 border-end border-secondary'>
                            <h5 className='text-light'>
                                Тип произведения
                            </h5>
                        </div>
                        <div className='col-8'>
                            <h5 className='text-light'>
                                {formatType(props.film.type)}
                            </h5>
                        </div>
                        <div className='col-4 border-end border-secondary'>
                            <h5 className='text-light'>
                                Жанр
                            </h5>
                        </div>
                        <div className='col-8'>
                            <h5 className='text-light'>
                                {formatGenresToString(props.film.genres)}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Film
