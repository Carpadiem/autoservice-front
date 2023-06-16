import React from 'react'
import styles from './_3_MoreServicesBlock.module.css'
import { Block } from '../../components/Block'
import { BookAPlaceButton } from '../../components/BookAPlaceButton'


interface _3_MoreServicesBlockProps {
    onClickBookAPlaceButton: () => void
}


function _3_MoreServicesBlock({ onClickBookAPlaceButton }: _3_MoreServicesBlockProps) {
    
    const icon_arrow = require('./icons/arrow.png')
    
    return (
        <>
            <div id='moreServicesBlock'/>
            <Block
                blockHeight={650}

                containerDisplay='flex'
                containerJustifyContent='center'
                containerAlignItems='center'
                containerGap={50}

                bgColor='#F5F5F5'
                zIndex={3}
                >
                
                <div className={styles.offer} style={{backgroundColor:''}}>
                    <h1><span>Услуги по ремонту</span><br/>автомобилей, которые<br/>мы предлагаем</h1>
                    <p>Мы используем только высококачественные детали и стремимся сделать ваши дорожные поездки безопасными и комфортными! Мы всегда рады помочь вам в решении этих задач!</p>
                    <BookAPlaceButton onClick={() => onClickBookAPlaceButton()}/>
                </div>
                <div className={styles.services} style={{backgroundColor:''}}>
                    <div className={styles.servicesLeft}>
                        <ul>
                            <li><img src={icon_arrow}/> Ремонт и обслуживание</li>
                            <li><img src={icon_arrow}/> Замена и ремонт тормозов</li>
                            <li><img src={icon_arrow}/> Замена и ремонтирование шин</li>
                            <li><img src={icon_arrow}/> Ремонт топливной системы</li>
                            <li><img src={icon_arrow}/> Настройка рулевого<br/>управления и подвески</li>
                        </ul>
                    </div>
                    <div className={styles.servicesRight}>
                        <ul>
                            <li><img src={icon_arrow}/> Выравнивание колес</li>
                            <li><img src={icon_arrow}/> Компьютерная диагностика</li>
                            <li><img src={icon_arrow}/> Замена масел</li>
                            <li><img src={icon_arrow}/> Ремонт кондиционеров</li>
                            <li><img src={icon_arrow}/> Обслуживание системы<br/>охлаждения двигателя</li>
                        </ul>
                    </div>
                </div>

            </Block>
        </>
    )
}

export default _3_MoreServicesBlock