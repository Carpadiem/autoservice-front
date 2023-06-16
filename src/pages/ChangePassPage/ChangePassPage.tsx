import React from 'react'
import { useEffect, useState } from 'react'
import styles from './ChangePassPage.module.css'

import { Header } from '../../components/Header'
import { Block } from '../../components/Block'
import { Field } from '../../components/Field'

import { api } from '../../App'
import { IUser } from '../../model'


export default function ChangePassPage() {
    
    // useEffect(()=>{
    //     const user: string | null = window.localStorage.getItem('user')
    //     if (user != null)
    //         console.log(JSON.parse(user));
    // }, []);


    const [isUserAuth, setIsUserAuth] = useState(false)
    useEffect(()=>{

        const storage_user = window.localStorage.getItem('user')
        if (storage_user != null) {
            setIsUserAuth(true);
            console.log(storage_user);
        }

    }, [])


    const [newpass, setNewpass] = useState('')
    function onChange_pass(e: React.ChangeEvent<HTMLInputElement>) {
        setNewpass(e.target.value);
    }

    const [repeatNewpass, setRepeatNewpass] = useState('')
    function onChange_repeatpass(e: React.ChangeEvent<HTMLInputElement>) {
        setRepeatNewpass(e.target.value)
    }

    const [tcolorNewpass, setTcolorNewpass] = useState('#333')
    function mismatch() {
        setTcolorNewpass('crimson')
    }

    async function ConfirmClick() {
        if (newpass != repeatNewpass) {
            setNewpass('Пароли не совпадают')
            setRepeatNewpass('')
            mismatch()
            setTimeout(function() { setNewpass(''); setTcolorNewpass('#333') }, 2500)
            return
        }
        
        const storage_user = window.localStorage.getItem('user')
        
        let thisuser: IUser | undefined = undefined;
        if (storage_user != null)
            thisuser = JSON.parse(storage_user);

        const data = {
            userdata: {
                id: thisuser?.id
            },
            newpass: newpass,
        }
        const response = await api.post('/users/changepassword', data);
        if (response.status == 201) {
            window.location.href = '/office'
            alert('Успешная смена пароля.')
        }
        else {
            alert(`Ошибка ${response.status}. Пожалуйста, обратитесь в поддержку`)
        }
    }

    return (
        <>
            <Header bgColor='#333' showPoints={false} showButton={true}/>
            <Block
                
                blockHeight={500}
                bgColor='#fff'
                zIndex={1}
                containerDisplay='flex'
                containerAlignItems='center'
                containerJustifyContent='center'
                containerFlexDir='column'
                containerGap={20}>

                    {isUserAuth &&
                        <>
                            <Field title='Новый пароль' placeholder='' width='320px' onChange={(e)=>{onChange_pass(e)}} tcolor={tcolorNewpass} value={newpass} />
                            <Field title='Повторите новый пароль' placeholder='' width='320px' onChange={(e)=>{onChange_repeatpass(e)}} tcolor='#333' value={repeatNewpass} />
                            <button className={styles.btnConfirm} onClick={()=>{ConfirmClick()}}>Изменить пароль</button>
                        </>
                    }

                    {!isUserAuth &&
                        <p>Вы не авторизованы</p>
                    }
                </Block>
        </>
    ) 
}