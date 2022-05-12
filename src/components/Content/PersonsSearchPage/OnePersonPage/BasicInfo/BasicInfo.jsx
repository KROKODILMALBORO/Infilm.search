import React from 'react'

import InterestingFacts from './InterestingFacts'

import {formatDate} from './functions'

import classes from './BasicInfo.module.css'

const BasicInfo = (props) => {
    return (
        <div className='d-flex flex-row bg-dark rounded-bottom p-4'>
                <div className='col-2'>
                    <img
                        className='rounded shadow'
                        src={props.person.posterUrl}
                        width='200'
                        alt='...'
                    />
                </div>
                <div className='col-7'>
                    <div className='d-flex justify-content-start'>
                        <div>
                            <h1 className={`mt-4 ps-4 ${classes.fontNameRu}`}>
                                {props.person.nameRu}
                            </h1>
                        </div>
                    </div>
                    <div className='ps-4'>
                        <div className='bg-secondary bg-opacity-10 rounded-end border-start border-secondary shadow p-1 mt-4 me-5'>
                            <div className='row'>
                                <div className='col-4 d-flex justify-content-end align-items-center border-end border-secondary pe-3 ms-3'>
                                    <h5 className='pt-1'>
                                        Дата рождения
                                    </h5>
                                </div>
                                <div className='col-7 text-light text-opacity-75'>
                                    <h5 className='pt-1'>
                                        {
                                            <div>
                                                {formatDate(props.person.birthday)}
                                                &nbsp;
                                                ({props.person.age}&nbsp; лет)
                                            </div> ||
                                            <span>Данные отсутствуют</span>
                                        }
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className='bg-secondary bg-opacity-10 rounded-end border-start border-secondary shadow p-1 mt-2 me-5'>
                            <div className='row'>
                                <div className='col-4 d-flex justify-content-end align-items-center border-end border-secondary pe-3 ms-3'>
                                    <h5 className='pt-1'>
                                        Место рождения
                                    </h5>
                                </div>
                                <div className='col-7 text-light text-opacity-75'>
                                    <h5 className='pt-1'>
                                        {
                                            props.person.birthplace ||
                                            <span>Данные отсутствуют</span>
                                        }
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className='bg-secondary bg-opacity-10 rounded-end border-start border-secondary shadow p-1 mt-2 me-5'>
                            <div className='row'>
                                <div className='col-4 d-flex justify-content-end align-items-center border-end border-secondary pe-3 ms-3'>
                                    <h5 className='pt-1'>
                                        Профессия
                                    </h5>
                                </div>
                                <div className='col-7 text-light text-opacity-75'>
                                    <h5 className='pt-1'>
                                        {props.person.profession}
                                    </h5>
                                </div>
                            </div>
                        </div>
                        {
                            props.person.death &&
                            <div>
                                <div className='bg-secondary bg-opacity-10 rounded-end border-start border-secondary shadow p-1 mt-4 me-5'>
                                    <div className='row'>
                                        <div className='col-4 d-flex justify-content-end align-items-center border-end border-secondary pe-3 ms-3'>
                                            <h5 className='pt-1'>
                                                Дата смерти
                                            </h5>
                                        </div>
                                        <div className='col-7 text-light text-opacity-75'>
                                            <h5 className='pt-1'>
                                                {formatDate(props.person.death)}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-secondary bg-opacity-10 rounded-end border-start border-secondary shadow p-1 mt-2 me-5'>
                                    <div className='row'>
                                        <div className='col-4 d-flex justify-content-end align-items-center border-end border-secondary pe-3 ms-3'>
                                            <h5 className='pt-1'>
                                                Место смерти
                                            </h5>
                                        </div>
                                        <div className='col-7 text-light text-opacity-75'>
                                            <h5 className='pt-1'>
                                                {props.person.deathplace}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className='col-3'>
                    {
                        !!props.person.facts.length > 0 &&
                        <InterestingFacts facts={props.person.facts}/>
                    }
                </div>
        </div>
    )
}

export default BasicInfo
