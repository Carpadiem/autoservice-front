import React from 'react'
import styles from './SomethingWrongModal.module.css'
import { Link } from 'react-router-dom'


interface SomethingWrongModalProps {
    onClickClose: () => void
}

function SomethingWrongModal({ onClickClose }: SomethingWrongModalProps) {
    return (
        <>
            <div className={styles.modal}>
                <div className={styles.closePanel} onClick={() => onClickClose()}>
                    <img src={require('./icons/close.png')}/>
                </div>
                <h1 className={styles.title}><span>Упс...</span>что-то не так</h1>
                <p className={styles.subtitle}>Пожалуйста, войдите в аккаунт, прежде чем бронировать место в сервисе</p>
                <Link to='/auth/login' style={{textDecoration: 'none'}}>
                    <button className={styles.btnLogin}>Войти</button>
                </Link>
            </div>
        </>
    )
}

export default SomethingWrongModal