import React from 'react'
import {Routes, Route} from 'react-router-dom'

import MainPage from './MainPage'
import FilmsSearchPage from './FilmsSearchPage'
import OneFilmPage from './FilmsSearchPage/OneFilmPage'
import PersonsSearchPage from './PersonsSearchPage'
import OnePersonPage from './PersonsSearchPage/OnePersonPage'

const Content = () => {
    return (
        <div className='pt-5'>
            <Routes>
                <Route
                    path='/'
                    element={<MainPage />}
                />
                <Route
                    path='/films'
                    element={<FilmsSearchPage />}
                />
                <Route
                    path='/films/:id'
                    element={<OneFilmPage />}
                />
                <Route
                    path='/persons'
                    element={<PersonsSearchPage />}
                />
                <Route
                    path='/persons/:id'
                    element={<OnePersonPage/>}
                />
            </Routes>
        </div>
    )
}

export default Content
