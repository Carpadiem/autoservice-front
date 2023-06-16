import React, { useEffect, useState } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { IUser } from '../../model'


const clog = console.log

interface HeaderProps {
    bgColor?: string
    showPoints?: boolean
    showButton?: boolean
}


function Header({ bgColor='', showPoints=true, showButton=true }: HeaderProps) {

    const image_account = require('./icons/account.png')

    const scrollMoreServicesBlock = () => {
        document.getElementById('moreServicesBlock')?.scrollIntoView({behavior: 'smooth'})}
    const scrollAbout = () => {
        document.getElementById('aboutBlock')?.scrollIntoView({behavior: 'smooth'})}
    const scrollReviews = () => {
        document.getElementById('reviewsBlock')?.scrollIntoView({behavior: 'smooth'})}
    const scrollContacts = () => {
        document.getElementById('contactsBlock')?.scrollIntoView({behavior: 'smooth'})}
    
    const _bgColor = bgColor == '' ? 'none' : bgColor

    
    const [user, setUser] = useState<IUser | null>(null)
    useEffect(()=>{
        let JSONuser = window.localStorage.getItem('user')
        if (JSONuser != null)
        {
            JSONuser = JSON.parse(JSONuser)
            setUser(Object(JSONuser))
        }
    },[])
   
    
    return (
        <div className={styles.block} style={{backgroundColor: _bgColor}}>
            <div className={styles.container}>
                
                <Link to='/' style={{textDecoration: 'none'}}>
                    <div className={styles.boxLogo}>
                        <h1 className={styles.logo}>
                            <span>EX</span>
                            <span>PRESS</span>
                        </h1>
                        <div className={styles.vSeparator}/>
                        <p className={styles.postfixText}>Автосервис</p>
                    </div>
                </Link>
                <div className={styles.rightBox}>
                    {showPoints &&
                    <>
                        <div className={styles.points}>
                            <a onClick={() => scrollMoreServicesBlock()} >Услуги</a>
                            <a onClick={() => scrollAbout()}>О нас</a>
                            <a onClick={() => scrollReviews()}>Отзывы</a>
                            <a onClick={() => scrollContacts()}>Контакты</a>
                        </div>
                    </>
                    }
                    {showButton && user == null &&
                    <>
                        <div className={styles.vSeparator}/>
                        <div className={styles.accountBox}>
                            <Link to='/auth/login' style={{textDecoration: 'none'}}>
                                <button className={styles.btnLogin}>Войти</button>
                            </Link>
                        </div>
                    </>
                    }
                    {user != null &&
                    <>
                        <div className={styles.accountBox} onClick={()=>{
                            window.location.href = '/office'
                        }}>
                            <h1 className={styles.accountUsername}>{user.username}</h1>
                            <img className={styles.accountImage} src={image_account} alt="" />
                        </div>
                    </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header