import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Login from './LoginSignup/LoginSignup'
import ROUTES from '../config/routes'

const { HOME, LOGIN } = ROUTES

const Pages = () => {
    return (
        <div className="pages">
            <Router>
                <Routes>
                    <Route path={HOME} element={<Home />} />
                    <Route path={LOGIN} element={<Login />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Pages