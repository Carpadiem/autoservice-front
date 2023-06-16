import React from 'react'
import styles from './Block.module.css'

interface BlockProps {
    children: React.ReactNode
    blockHeight: number
    bgColor?: string
    bgImage?: string
    containerDisplay?: string
    containerJustifyContent?: string
    containerAlignItems?: string
    containerGap?: number
    containerFlexDir?: string
    overflow?: string
    zIndex: number
}

function Block({
    children,
    blockHeight,
    containerDisplay='block',
    containerJustifyContent='',
    containerAlignItems='',
    containerGap=0,
    containerFlexDir='unset',
    bgColor='none',
    bgImage='',
    overflow='hidden',
    zIndex}: BlockProps) {

    return (
        <>
            <div
                className={styles.block}
                style={{
                    height: blockHeight,
                    backgroundColor: bgColor,
                    backgroundImage: bgImage == '' ? 'none' : 'url('+bgImage+')',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    overflow: overflow,
                    zIndex: zIndex
                }}>
                <div
                    className={styles.container}
                    style={{
                        display: containerDisplay,
                        justifyContent: containerJustifyContent,
                        alignItems: containerAlignItems,
                        gap: containerGap,
                        flexDirection: containerFlexDir as 'unset'
                    }}
                    >
                    { children }
                </div>
            </div>
        </>
    )
}
export default Block