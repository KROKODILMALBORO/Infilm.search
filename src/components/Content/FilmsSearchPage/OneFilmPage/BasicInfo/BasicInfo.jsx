import React from 'react'

import * as functions from '../../functions'

import classes from './BasicInfo.module.css'

const BasicInfo = (props) => {
    return (
        <div className='container bg-dark rounded-bottom shadow pb-4 px-4'>
            <div className='d-flex justify-content-between'>
                <div>
                    <img
                        className='rounded shadow mt-4'
                        src={props.film.posterUrl}
                        width='250'
                        alt='...'
                    />
                    <h3 className='d-flex justify-content-center bg-secondary bg-opacity-10 rounded shadow pb-2 mt-2'>
                        {functions.formatType(props.film.type)}
                    </h3>
                    <h3 className='d-flex justify-content-center bg-secondary bg-opacity-10 rounded shadow pb-2 mt-2'>
                        {props.film.year}
                    </h3>
                </div>
                <div className='ps-3'>
                    <div className='d-flex justify-content-between mt-3'>
                        <div>
                            <h1 className={`mt-4 ps-4 ${classes.fontNameRu}`}>
                                {
                                    props.film.nameRu ?
                                    props.film.nameRu :
                                    props.film.nameOriginal
                                }
                            </h1>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='ms-5'>
                                <label className='text-light text-opacity-25'>
                                    Кинопоиск
                                </label>
                                <div className='bg-secondary bg-opacity-10 border border-dark rounded shadow'>
                                    <h1 className={`text-light text-opacity-75 px-4 pt-2 ${classes.fontNameRu}`}>
                                        {
                                            props.film.ratingKinopoisk ?
                                            props.film.ratingKinopoisk :
                                            '-'
                                        }
                                    </h1>
                                </div>
                            </div>
                            <div>
                                <div className='bg-warning rounded-end border border-dark shadow mt-4'>
                                    <h2 className='text-dark fw-bold px-3 pt-1'>
                                        {
                                            props.film.ratingImdb ?
                                            props.film.ratingImdb :
                                            '-'
                                        }
                                    </h2>
                                </div>
                                <label className='text-light text-opacity-25 ms-2'>
                                    IMDb
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='bg-secondary bg-opacity-10 rounded-end border-start border-secondary shadow p-1 pt-2 px-4 mt-2'>
                        <div className='row'>
                            <div className='col-12 me-5'>
                            {
                                props.film.description ?
                                <h4>{props.film.description}</h4> :
                                <h3 className='text-light text-opacity-25 pe-5 me-5'>(Данные об описании произведения временно отсутствуют)</h3>
                            }
                            </div>
                        </div>
                    </div>
                    <div className='ps-3 pe-5'>
                        <div className='bg-secondary bg-opacity-10 rounded-end border-start border-secondary shadow p-1 mt-4 me-5'>
                            <div className='row'>
                                <div className='col-2 d-flex justify-content-end align-items-center border-end border-secondary pe-3 ms-3'>
                                    <h5 className='pt-1'>
                                        Жанр
                                    </h5>
                                </div>
                                <div className='col-9 text-light text-opacity-75'>
                                    <h5 className='pt-1'>
                                        {functions.formatGenresToString(props.film.genres)}
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className='bg-secondary bg-opacity-10 rounded-end border-start border-secondary shadow p-1 mt-2 me-5'>
                            <div className='row'>
                                <div className='col-2 d-flex justify-content-end align-items-center border-end border-secondary pe-3 ms-3'>
                                    <h5 className='pt-1'>
                                        Страна
                                    </h5>
                                </div>
                                <div className='col-9 text-light text-opacity-75'>
                                    <h5 className='pt-1'>
                                        {functions.formatCountriesToString(props.film.countries)}
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className='bg-secondary bg-opacity-10 rounded-end border-start border-secondary shadow p-1 mt-2 me-5'>
                            <div className='row'>
                                <div className='col-2 d-flex justify-content-end align-items-center border-end border-secondary pe-3 ms-3'>
                                    <h5 className='pt-1'>
                                        Время
                                    </h5>
                                </div>
                                <div className='col-9 text-light text-opacity-75'>
                                    <h5 className='pt-1'>
                                        {functions.formatFilmLength(props.film.filmLength)}
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className='bg-secondary bg-opacity-10 rounded-end border-start border-secondary shadow p-1 mt-2 me-5'>
                            <div className='row'>
                                <div className='col-2 d-flex justify-content-end align-items-center border-end border-secondary pe-3 ms-3'>
                                    <h5 className='pt-1'>
                                        Возраст
                                    </h5>
                                </div>
                                <div className='col-9 text-light text-opacity-75'>
                                    <h5 className='pt-1'>
                                        {functions.fomatRatingAgeLimits(props.film.ratingAgeLimits)}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasicInfo
