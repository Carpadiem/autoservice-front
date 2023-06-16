import React, { useState } from 'react'
import styles from './LoginPage.module.css'
import { api } from '../../App'
import { Link } from 'react-router-dom'
import { Field } from '../../components/Field'
import { Header } from '../../components/Header'


function LoginPage() {  
    const image_car = require('./images/car.png')
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [tcolorUsername, setTcolorUsername] = useState('#333')
    const [tcolorPassword, setTcolorPassword] = useState('#333')

    const loginClick = async () => {
        const response = await api.get(`/users/login?username=${username}&password=${password}`)
        if (response.data.hasOwnProperty('message')) {
            const message = response.data.message
            if (message == 'UserNotFound') {
                const prevValue = username
                setTcolorUsername('crimson')
                setUsername('Пользователь не найден')
                setTimeout(()=>{
                    setTcolorUsername('#333')
                    setUsername(prevValue)
                }, 1500)
            }
            else if (message == 'WrongPassword') {
                setTcolorPassword('crimson')
                setPassword('Неверный пароль')
                setTimeout(()=>{
                    setTcolorPassword('#333')
                    setPassword('')
                }, 1500)
            }
        }
        else {
            console.log(response.data)
            window.localStorage.setItem('user', JSON.stringify(response.data))
            window.location.href='/'
        }
    }

    return (
        <>
            <div className={styles.block}>
                <Header bgColor='#24242E' showPoints={false} showButton={false}/>
                <div className={styles.container}>
                    <div className={styles.doubleBackground}>
                        <div className={styles.dgbDark} />
                        <div className={styles.dgbLight} />
                    </div>
                    <div className={styles.box}>
                        <div className={styles.image}><img src={image_car} alt="" /></div>
                        <div className={styles.form}>
                            <div className={styles.intro}>
                                <h1 className={styles.title}>Личный кабинет</h1>
                                <p className={styles.subtitle}>Вход</p>
                            </div>
                            <div className={styles.fields}>
                                <Field value={username} tcolor={tcolorUsername} onChange={(event) => { setUsername(event.target.value) }} width={'100%'} title='Имя пользователя' placeholder=''/>
                                <Field value={password} tcolor={tcolorPassword} onChange={(event) => { setPassword(event.target.value) }} width={'100%'} title='Пароль' placeholder=''/>
                            </div>
                            <div className={styles.controlButtons}>
                                <button className={styles.btnRegistration}>
                                    <Link to='/auth/registration' style={{textDecoration: 'none'}}>Регистрация</Link>
                                </button>
                                <button
                                className={styles.btnLogin}
                                onClick={() => { loginClick() }}>
                                    Войти
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage