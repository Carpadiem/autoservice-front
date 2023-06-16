import React from 'react'

import { Block } from '../../components/Block'
import { ServiceCard } from '../../components/ServiceCard'


function _2_ServicesBlock() {    
    return (
        <>
            <Block
                blockHeight={350}
                bgColor='#fff'

                containerDisplay='flex'
                containerJustifyContent='center'
                containerGap={30}

                overflow='visible'
                zIndex={2}
                >

                <ServiceCard icon={require('./icons/icon_key.png')} title='профилактическое обслуживание'/>
                <ServiceCard icon={require('./icons/icon_car.png')} title='капитальный ремонт'/>
                <ServiceCard icon={require('./icons/icon_gear.png')} title='ремонт трансмиссии'/>
                <ServiceCard icon={require('./icons/icon_lightning.png')} title='диагностика электричества'/>
            </Block>
        </>
    )
}

export default _2_ServicesBlock