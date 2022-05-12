import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className='fixed-top shadow'>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <span className='navbar-brand'>
                        INFILM
                    </span>
                    <div className='collapse navbar-collapse justify-content-end'>
                        <ul className='navbar-nav'>
                            <li className='nav-item mx-2'>
                                <Link
                                    className='nav-link'
                                    to='/'
                                >
                                    Главная страница
                                </Link>
                            </li>
                            <li className='nav-item mx-2'>
                                <Link
                                    className='nav-link'
                                    to='/films'
                                >
                                    Поиск кино
                                </Link>
                            </li>
                            <li className='nav-item mx-2'>
                                <Link
                                    className='nav-link'
                                    to='/persons'
                                >
                                    Поиск персон
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
