import React from 'react'
import {Link} from 'react-router-dom'

import imageTop from './media/imageTop.png'
import imageTopWind from './media/imageTopWind.png'
import imageBottom from './media/imageBottom.png'
import imageBottomWind from './media/imageBottomWind.png'

const MainPage = () => {
    return (
        <>
            <div className='d-flex flex-row justify-content-start align-items-center'>
                <img
                    className='me-5'
                    src={imageTop}
                    width='500'
                    alt='...'
                />
                <div className='bg-dark bg-opacity-75 rounded shadow-lg p-5 ms-5'>
                    <h4
                        className='mb-4 pe-5'
                        align='left'
                    >
                        Данный сервис предоставляет подробную<br />
                        информацию о кино, источником которой<br />
                        является 
                        <a
                            className='text-info text-decoration-none'
                            href='https://www.kinopoisk.ru'
                            target="_blank"
                        >
                            интернет-сервис Кинопоиск
                        </a>
                    </h4>
                    <div className='d-flex justify-content-start'>
                        <Link
                            className='btn btn-lg btn-outline-info'
                            to='/films_search'
                        >
                            Подробнее
                        </Link>
                    </div>
                </div>
                <img
                    src={imageTopWind}
                    width='250'
                    alt='...'
                />
            </div>
            <div className='d-flex flex-row justify-content-end align-items-center'>
                <img
                    src={imageBottomWind}
                    width='250'
                    alt='...'
                />
                <div className='bg-dark bg-opacity-75 rounded shadow-lg p-5 me-5'>
                        <h4
                            className='mb-4 ps-4'
                            align='right'
                        >
                            Здесь Вы сможете ознакомится с фактами<br />
                            не только о произведениях, но и о людях<br />
                            принимающих участие в их создании
                        </h4>
                    <div className='d-flex justify-content-end'>
                        <Link
                            className='btn btn-lg btn-outline-info'
                            to='/persons_search'
                        >
                            Подробнее
                        </Link>
                    </div>
                </div>
                <img
                    className='ms-5'
                    src={imageBottom}
                    width='500'
                    alt='...'
                />
            </div>
        </>
    )
}

export default MainPage
