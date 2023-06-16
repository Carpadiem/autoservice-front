import React from 'react'
import { useState } from 'react'
import styles from './BookAPlaceModal.module.css'
import { Field } from '../Field'
import { api } from '../../App'
import { AxiosError } from 'axios'


interface BookAPlaceModalProps {
    onClickClose: () => void
}

interface IRequest {
    id: number
    name: string
    phone: string
    car: string
}

interface ModelError {
    message: string
}

function BookAPlaceModal({ onClickClose }: BookAPlaceModalProps) {
    
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [car, setCar] = useState('');

    async function MakePostRequest() {
        const data = {
            name: name,
            phone: phone,
            car: car,
        }
        
        try {
            const response = await api.post<IRequest>('/requests/create', data)
            console.log(response)
            onClickClose()
        }
        catch (e) {
            const err = e as AxiosError<ModelError>
            const status = err.response?.status
            if (status == 409) {
                const message = err.response?.data.message
                if (message == 'RequestAlreadyExists') {
                    alert('Заявка по этому номеру телефона уже была создана.')
                }
            }
        }
    }

    async function BookAPlaceClick() {
        if (name != '' && phone != '' && car != '') {
            MakePostRequest()
        }
        else {
            alert('Пожалуйста, заполните все поля')
        }
    }

    return (
        <>
            <div className={styles.modal}>
                <div className={styles.closePanel} onClick={() => onClickClose()}>
                    <img src={require('./icons/close.png')}/>
                </div>
                <h1 className={styles.title}><span>Забронировать</span> место</h1>
                <p className={styles.subtitle}>Оставьте свои данные, в течение дня мы с вами свяжемся</p>
                <div className={styles.fields}>
                    <Field title='Ваше имя' placeholder='' onChange={(e)=>{setName(e.target.value)}} value={name}/>
                    <Field title='Номер телефона' placeholder='' onChange={(e)=>{setPhone(e.target.value)}} value={phone}/>
                    <Field title='Какой у вас автомобиль?' placeholder='' onChange={(e)=>{setCar(e.target.value)}} value={car}/>
                </div>
                <button className={styles.btnBookAPlace} onClick={()=>{BookAPlaceClick()}}>Забронировать</button>
            </div>
        </>
    )
}

export default BookAPlaceModal