import React from 'react'
import styles from './ServiceCard.module.css'

interface ServiceCardProps {
    icon: string,
    title: string,
}

function ServiceCard({ icon, title }: ServiceCardProps) {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.icon} style={{ backgroundImage: 'url('+icon+')' }}/>
                <div className={styles.title}>{title}</div>
            </div>
        </>
    )
}

export default ServiceCard