import React from 'react'
import styles from './RequestField.module.css'

import { api } from '../../../../App'


interface RequestFieldProps {
    id: number
    name: string
    phone: string
    car: string
    clickEvent: (response: any) => void
}

export default function RequestField(props: RequestFieldProps) {
    
    async function acceptClick() {
        const response = await api.post(`/requests/accept/${props.id}`);
        
        if (response.status == 201)
            props.clickEvent(response)
        else {
            alert('Произошла ошибка. Пожалуйста, обратитесь к разработчику.')
        }
    }
    
    return (
        <>
            <div className={styles.field}>
                <span className={styles.value} style={{width: 30}}>{props.id}</span>
                <span className={styles.value}>{props.name}</span>
                <span className={styles.value}>{props.phone}</span>
                <span className={styles.value}>{props.car}</span>
                <button className={styles.btnAccept} onClick={()=>{acceptClick()}}>Принять</button>
            </div>
        </>
    )
}