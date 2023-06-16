import React from 'react'
import styles from './UserField.module.css'
import { useState, useEffect } from 'react'
import { api } from '../../../../App'
import { IUser } from '../../../../model'


// username
// name
// phone
// role

interface UserFieldProps {
    id: number
    username: string
    name: string
    phone: string
    role: string
}

function UserField(props: UserFieldProps) {
    
    const editpng = require('../../icons/edit.png')
    const deletepng = require('../../icons/delete.png')
    const arrowpng = require('../icons/arrow.png')

    function roleTranslate(role: string) {
        if (role == 'root') return 'Root'
        else if (role == 'user') return 'Пользователь'
        else if (role == 'admin') return 'Администратор'
        return ''
    }

    const [selectOpen, setSelectOpen] = useState(false)

    function selectClick(e: React.MouseEvent<HTMLDivElement>) {
        setSelectOpen(!selectOpen)
    }

    function selectBoxLeave() {
        setSelectOpen(false)
    }

    const [currentRole, setCurrentRole] = useState<string>(props.role)

    async function optClick(role: string) {
        const response = await api.post(`/users/setrole`, {
            username: props.username,
            newRole: role
        }).finally(()=>setCurrentRole(role))
    }

    return (
        <>
            <div className={styles.field}>
                <span className={styles.value} style={{width: 30}}>{props.id}</span>
                <span className={styles.value}>{props.username}</span>
                <span className={styles.value}>{props.name}</span>
                <span className={styles.value}>{props.phone}</span>

                <div className={styles.roleSelect} onClick={(e)=>selectClick(e)}>
                    <span className={styles.value} style={{fontSize: 14}}>{roleTranslate(currentRole)}</span>
                    <img src={arrowpng} alt="" style={{position: 'relative', bottom: 3, marginLeft: 5}}/>

                    {selectOpen &&
                    
                        <div className={styles.selectBox} onMouseLeave={()=>{selectBoxLeave()}}>
                            <div className={styles.selectOpt} onClick={()=>{optClick('user')}}>Пользователь</div>
                            <div className={styles.selectOpt} onClick={()=>{optClick('admin')}}>Администратор</div>
                        </div>

                    }

                </div>
            </div>
        </>
    )
}

export default UserField