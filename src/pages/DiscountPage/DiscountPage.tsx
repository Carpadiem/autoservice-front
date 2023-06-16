import React from 'react'
import styles from './DiscountPage.module.css'

import { Header } from '../../components/Header'
import { Block } from '../../components/Block'


function DiscountPage() {
    return (
        <>
            <Header bgColor='#242424' showPoints={false}/>
            <Block
            blockHeight={600}
            bgColor='white'
            zIndex={1}
            containerDisplay='flex'
            containerFlexDir='column'
            containerAlignItems='center'
            containerJustifyContent='start'
            >
                <h1 className={styles.header}>Скидка первым клиентам</h1>
                <p className={styles.text}>Мы знаем, что уход за вашим автомобилем может быть дорогим, поэтому мы предлагаем специальную акцию, чтобы помочь вам сэкономить деньги! Только в течение ограниченного времени все первые клиенты могут получить скидку 25% на все наши услуги.</p>
                <p className={styles.text}>Если вам нужна замена масла, ротация шин или капитальный ремонт двигателя, наша команда опытных техников сделает работу правильно. А благодаря нашим доступным ценам и первоклассному обслуживанию вы можете быть уверены, что ваш автомобиль находится в надежных руках.</p>
                <p className={styles.text}>Не упустите это невероятное предложение! Запишитесь на прием сегодня и воспользуйтесь нашей скидкой 25%. Просто назовите промо-код FIRST25 при записи на прием, и мы позаботимся обо всем остальном.</p>
                <p className={styles.text}>Мы с нетерпением ждем возможности помочь вам обеспечить бесперебойную работу вашего автомобиля и сэкономить при этом ваши деньги!</p>
            </Block>
        </>
    )
}

export default DiscountPage