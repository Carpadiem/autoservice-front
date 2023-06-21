import React from 'react'
import styles from './_10_FooterBlock.module.css'

import { Link } from 'react-router-dom'

import { Block } from '../../components/Block'


function _10_FooterBlock() {
    
    const address = require('./icons/address.png')
    const phone = require('./icons/phone.png')
    const clock = require('./icons/clock.png')
    
    return (
        <>
            <Block
            blockHeight={220}
            zIndex={10}
            bgColor='#F95F1F'
            containerDisplay='flex'
            containerJustifyContent='center'
            containerAlignItems='center'
            containerFlexDir='column'
            containerGap={30}>
                <div className={styles.boxContacts}>
                    <div className={styles.contact}>
                        <div className={styles.icon}><img src={address} alt="" /></div>
                        <div className={styles.textbox}>
                            <h1 className={styles.title}>Адрес</h1>
                            <p className={styles.text}>410056, Саратовская обл., г. Саратов, ул. им. Чернышевского Н.Г., д. 94, ком. 75</p>
                        </div>
                    </div>
                    <div className={styles.contact}>
                        <div className={styles.icon}><img src={phone} alt="" /></div>
                        <div className={styles.textbox}>
                            <h1 className={styles.title}>Телефон</h1>
                            <p className={styles.text}>+7 (965) 883-77-77</p>
                        </div>
                    </div>
                    <div className={styles.contact}>
                        <div className={styles.icon}><img src={clock} alt="" /></div>
                        <div>
                            <h1 className={styles.title}>Часы работы</h1>
                            <p className={styles.text}>пн-вс; 08:00-18:00</p>
                        </div>
                    </div>
                </div>
                <Link className={styles.policyLink} to={'/policy'}>Политика конфиденциальности</Link>
            </Block>
        </>
    )
}

export default _10_FooterBlock