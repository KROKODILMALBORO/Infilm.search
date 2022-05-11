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
                    path='/films_search'
                    element={<FilmsSearchPage />}
                />
                <Route
                    path='/films_search/one_film/:id'
                    element={<OneFilmPage />}
                />
                <Route
                    path='/persons_search'
                    element={<PersonsSearchPage />}
                />
                <Route
                    path='/persons_search/one_person/:id'
                    element={<OnePersonPage/>}
                />
            </Routes>
        </div>
    )
}

export default Content
