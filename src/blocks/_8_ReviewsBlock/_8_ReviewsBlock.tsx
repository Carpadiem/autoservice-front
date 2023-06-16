import React from 'react'
import styles from './_8_ReviewsBlock.module.css'

import { Block } from '../../components/Block'
import { Review } from '../../components/Review'


function _8_ReviewsBlock(){
    
    return (
        <>
            <div id='reviewsBlock'/>
            <Block
            blockHeight={720}
            zIndex={8}
            bgColor='#F5F5F5'
            containerDisplay='flex'
            containerFlexDir='column'
            containerJustifyContent='flex-start'
            containerAlignItems='center'>
                <h1 className={styles.header}><strong>Отзывы</strong> наших клиентов</h1>

                <div className={styles.boxReviews}>
                    <Review
                    text='Отличный автосервис! Персонал был дружелюбным, эффективным, а автомобиль стал как новый. Очень рекомендую!'
                    author='Антон'
                    date='01 февраля, 2023'/>
                    <Review
                    text='Сервис превосходный! Сотрудники быстро диагностировали проблему и предоставили прозрачную разбивку затрат. Ремонт был выполнен в обещанные сроки.'
                    author='Мария'
                    date='24 февраля, 2023'/>
                    <Review
                    text='Классный автосервис! Благодаря команде механиков, мой автомобиль очень быстро вернулся на дорогу. С заменой приборной панели справились быстро. Спасибо!'
                    author='Владимир'
                    date='09 марта, 2023'/>
                </div>

                <button className={styles.btnAllReviews}>Все отзывы</button>
            </Block>
        </>
    )
}

export default _8_ReviewsBlock