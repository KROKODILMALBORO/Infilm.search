import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import Header from './components/Header'
import Content from './components/Content'

import 'bootstrap/dist/css/bootstrap.min.css'

import classes from './App.module.css'

const App = () => {
    return (
        <div className={`min-vh-100 text-light ${classes.bg}`}>
            <BrowserRouter>
                <Header />
                <Content />
            </BrowserRouter>
        </div>
    )
}

export default App
