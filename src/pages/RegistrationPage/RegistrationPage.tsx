import React, { useState, useEffect } from 'react'
import styles from './RegistrationPage.module.css'
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Field } from '../../components/Field'
import { api } from '../../App'


function RegistrationPage() {
    
    const image_car = require('./images/car.png')
    
    const [newUsername, setNewUsername] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const [tcolorNewUsername, setTcolorNewUsername] = useState('#333')
    const [tcolorName, setTcolorName] = useState('#333')
    const [tcolorPhone, setTcolorPhone] = useState('#333')
    const [tcolorPassword, setTcolorPassword] = useState('#333')
    const [tcolorRepeatPassword, setTcolorRepeatPassword] = useState('#333')

    const [readRules, setReadRules] = useState(false);

    const registerClick = async () => {

        if (!readRules) return

        // пустота полей
        if (newUsername == '') {
            setTcolorNewUsername('crimson'); setNewUsername('Пустое поле')
            setTimeout(()=>{ setTcolorNewUsername('#333'); setNewUsername('') }, 1500)
            return
        }
        if (name == '') {
            setTcolorName('crimson'); setName('Пустое поле')
            setTimeout(()=>{ setTcolorName('#333'); setName('') }, 1500)
            return
        }
        if (phone == '') {
            setTcolorPhone('crimson'); setPhone('Пустое поле')
            setTimeout(()=>{ setTcolorPhone('#333'); setPhone('') }, 1500)
            return
        }
        if (password == '') {
            setTcolorPassword('crimson'); setPassword('Пустое поле')
            setTimeout(()=>{ setTcolorPassword('#333'); setPassword('') }, 1500)
            return
        }
        if (repeatPassword == '') {
            setTcolorRepeatPassword('crimson'); setRepeatPassword('Пустое поле')
            setTimeout(()=>{ setTcolorRepeatPassword('#333'); setRepeatPassword(''); }, 1500)
            return
        }

        // проверка телефона
        const isNumeric = (n: any) => isNaN(n)
        function IncorrectPhone() {
            setTcolorPhone('crimson'); setPhone('Пример: 89990001122')
            setTimeout(()=>{ setTcolorPhone('#333'); setPhone(''); }, 1500)
            return
        }
        // проверка телефона на отсутствие символов, кроме цифр
        if (isNumeric(phone)) { IncorrectPhone(); return }
        // проверка длины телефона
        if (phone.length != 11) { IncorrectPhone(); return }

        // сравнение паролей
        if (password != repeatPassword) {
            setTcolorRepeatPassword('crimson'); setRepeatPassword('Пароли не совпадают')
            setTimeout(()=>{
                setTcolorRepeatPassword('#333')
                setPassword('')
                setRepeatPassword('')
            }, 1500)
            return
        }

        // проверка на существование пользователя
        const alreadyExistUser = await api.get(`/users/${newUsername}`)
        // console.log(alreadyExistUser)
        if (alreadyExistUser.data != '') {
            setTcolorNewUsername('crimson'); setNewUsername('Такой пользователь уже есть')
            setTimeout(
                function() {
                    setTcolorNewUsername('#333')
                    setNewUsername('')
                },
            2500)
            return
        }

        const response = await api({
            method: 'post',
            url: '/users/register',
            data: {
                username: newUsername,
                name: name,
                phone: phone,
                password: password
            }
        })
        // console.log(response)
        window.localStorage.setItem('user', JSON.stringify(response.data))
        window.location.href = '/'
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
                                <p className={styles.subtitle}>Регистрация</p>
                            </div>
                            <div className={styles.fields}>
                                <Field tcolor={tcolorNewUsername} value={newUsername} onChange={(event)=>{ setNewUsername(event.target.value) }} width={'100%'} title='Новое имя пользователя' placeholder=''/>
                                <Field tcolor={tcolorName} value={name} onChange={(event)=>{ setName(event.target.value) }} width={'100%'} title='Ваше имя' placeholder=''/>
                                <Field tcolor={tcolorPhone} value={phone} onChange={(event)=>{ setPhone(event.target.value) }} width={'100%'} title='Номер телефона' placeholder=''/>
                                <Field tcolor={tcolorPassword} value={password} onChange={(event)=>{ setPassword(event.target.value) }} width={'100%'} title='Пароль' placeholder=''/>
                                <Field tcolor={tcolorRepeatPassword} value={repeatPassword} onChange={(event)=>{ setRepeatPassword(event.target.value) }} width={'100%'} title='Повторите пароль' placeholder=''/>
                            </div>
                            <label style={{
                                fontSize: 12,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 6,
                                marginTop: 20,
                                }} htmlFor="rules">
                                <input type="checkbox" id='rules' onChange={(e)=>setReadRules(e.target.checked)}/>
                                Согласен с <Link className={styles.policyLink} to={'/policy'}>политикой конфиденциальности</Link>
                            </label>
                            <div className={styles.controlButtons}>
                                <button className={styles.btnLogin}>
                                    <Link to='/auth/login' style={{textDecoration: 'none'}}>Вход</Link>
                                </button>
                                <button className={readRules == true ? styles.btnRegistrationActive : styles.btnRegistrationBlocked} onClick={()=>{ registerClick() }}>Зарегистрироваться</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegistrationPage