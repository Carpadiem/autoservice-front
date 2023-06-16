import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { DiscountPage } from './pages/DiscountPage'
import { LoginPage } from './pages/LoginPage'
import { RegistrationPage } from './pages/RegistrationPage'
import { OfficePage } from './pages/OfficePage'

import axios from 'axios'
import { ChangePassPage } from './pages/ChangePassPage'
export const api = axios.create({
    baseURL:'http://localhost:3001/api',
    timeout: 3000,
})


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <MainPage /> } />
                    <Route path='/discount' element={ <DiscountPage /> } />
                    <Route path='/auth/login' element={ <LoginPage /> }/>
                    <Route path='/auth/registration' element={ <RegistrationPage /> }/>
                    <Route path='/office' element={ <OfficePage /> }/>
                    <Route path='/changepassword' element={ <ChangePassPage /> } />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App