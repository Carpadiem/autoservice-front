import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import styles from './OfficePage.module.css'

import { IUser, IRequest} from '../../model'
import { Block } from '../../components/Block'
import { Header } from '../../components/Header'
import { UserField } from './components/UserField'
import { RequestField } from './components/RequestField'

import { api } from '../../App'


function OfficePage() {
    
    const [user, setUser] = useState<IUser | null>(null)
    const [role, setRole] = useState<string>('user')
    const [tabState, setTabState] = useState('profile')

    useEffect(()=>{
        let JSONuser = window.localStorage.getItem('user')
        if (JSONuser != null)
            JSONuser = JSON.parse(JSONuser)

        setUser(Object(JSONuser))
        if (user)
        {
            setRole(user.role)
        }
    }, [])


    window.onload = () => {
        let getuser: string | null = window.localStorage.getItem('user')
        if (getuser)
        {
            const parsed_user = JSON.parse(getuser);
            setUser(parsed_user);
            setRole(parsed_user.role)

        }
    }


    function logout() {
        setUser(null)
        window.localStorage.clear()
        window.location.href = '/'
    }


    const profileTab = <>
        <h1 className={styles.header}>Профиль <span>{ user?.username }</span></h1>
        <div className={styles.mydataBox}>
            <div className={styles.mydata}>
                <p className={styles.dataTitle}>Имя</p>
                <p className={styles.dataValue}>{ user?.name }</p>
                {/* <button className={styles.dataButton}/> */}
            </div>
            <div className={styles.mydata}>
                <p className={styles.dataTitle}>Телефон</p>
                <p className={styles.dataValue}>{ user?.phone }</p>
                {/* <button className={styles.dataButton}/> */}
            </div>
            <div className={styles.mydata}>
                <p className={styles.dataTitle}>Роль</p>
                <p className={styles.dataValue}>{ user?.role }</p>
                {/* <button className={styles.dataButton}/> */}
            </div>
        </div>
        <div style={{width: 400, display: 'flex', justifyContent: 'flex-end', gap: 10, }}>
            <Link to='/changepassword'>
                <button className={styles.logout}>Сменить пароль</button>
            </Link>
            <button className={styles.logout} onClick={()=>{ logout() }}>Выйти</button>
        </div>
    </>


    const [allUsers, setAllUsers] = useState<IUser[]>([])    
    async function getAllUsers() {
        const response = await api.get<IUser[]>('/users/all')
        response.data.shift()
        setAllUsers(response.data)
    }
    useEffect(()=>{getAllUsers()}, [])
    const usersTab = <>
        <div className={styles.globalboxTabs}>
            <div className={styles.tabsName}>
                <span className={styles.tn} style={{width: 30}}>ID</span>
                <span className={styles.tn}>Пользователь</span>
                <span className={styles.tn}>Имя</span>
                <span className={styles.tn}>Телефон</span>
                <span className={styles.tn}>Роль</span>
            </div>
            <div className={styles.boxUsersTabs}>
                {allUsers.map(user => {
                    return <UserField key={user.id} id={user.id} username={user.username} name={user.name} phone={user.phone} role={user.role} />
                })}
            </div>
        </div>
    </>


    const [allRequests, setAllRequests] = useState<(IRequest | undefined)[]>([])
    
    function clickAccept(response: any) {
        setAllRequests(response.data);
        // window.location.reload()
    }

    useEffect(()=>{
        setTabState('requests')
    }, [allRequests])

    async function getAllRequests() {
        const response = await api.get<IRequest[]>('/requests/getall')
        setAllRequests(response.data)
    }
    useEffect(()=>{getAllRequests()}, [])
    const requestsTab = <>
        <div className={styles.globalboxTabs}>
            <div className={styles.tabsName}>
                <span className={styles.tn} style={{width: 30}}>ID</span>
                <span className={styles.tn}>Имя</span>
                <span className={styles.tn}>Телефон</span>
                <span className={styles.tn}>Автомобиль</span>
            </div>
            <div className={styles.boxUsersTabs}>
                {allRequests.map(req => {
                    if (req)
                        return <RequestField clickEvent={(response)=>{clickAccept(response)}} key={req.id} id={req.id} name={req.name} phone={req.phone} car={req.car} />
                })}
            </div>
        </div>
    </>


    return (
        <>
            <Header bgColor='#333' showButton={false} showPoints={false}/>
            <Block
            blockHeight={780}
            bgColor='#fff'
            zIndex={1}
            containerDisplay='flex'
            containerFlexDir='column'
            containerJustifyContent='center'
            containerAlignItems='center'
            containerGap={20}>

                {role == 'user' ? 
                profileTab
                : 
                <>
                    <div className={styles.boxAdminTabs}>
                        <div className={styles.tab} style={tabState == 'profile' ? { backgroundColor: '#333', color: 'white' } : { backgroundColor: 'transparent', color: '#333'}} onClick={()=>setTabState('profile')}>Профиль</div>
                        <div className={styles.tab} style={tabState == 'users' ? { backgroundColor: '#333', color: 'white' } : { backgroundColor: 'transparent', color: '#333'}} onClick={()=>setTabState('users')}>Пользователи</div>
                        <div className={styles.tab} style={tabState == 'requests' ? { backgroundColor: '#333', color: 'white' } : { backgroundColor: 'transparent', color: '#333'}} onClick={()=>setTabState('requests')}>Заявки</div>
                    </div>

                    { tabState == 'profile' && profileTab }
                    { tabState == 'users' && usersTab }
                    { tabState == 'requests' && requestsTab }
                </>
                }

            </Block>
        </>
    )
}

export default OfficePage