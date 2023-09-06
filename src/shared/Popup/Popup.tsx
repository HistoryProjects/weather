import React from 'react';
import s from './popup.module.scss';
import { ThisDayItem } from '../../pages/Home/components/ThisDayInfo/ThisDayItem';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import IconSvgSelector from '../../assets/icons/IconSvgSelector';

type Props = {
    
}

interface Item {
    icon_id: string,
    name: string,
    value: string,
}

const Popup = (props: Props) => {

    const items = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: '20° - ощущается как 17°',
        },
        {
            icon_id: 'pressure',
            name: 'Давление',
            value: '765 мм ртутного столба - нормальное',
        },
        {
            icon_id: 'precipitation',
            name: 'Осадки',
            value: 'Без осадков',
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: '3 м/с юго-запад - легкий ветер'
        }
    
    ]

  return (
    <>
        <div className={s.blur}></div>
        
        <div className={s.popup}>
            <AiOutlineCloseCircle className={s.close} />
            <div className={s.day}>
                <div className={s.day__temp}>20&deg;</div>
                <div className={s.day__name}>Среда</div>
                <div className={s.icon}>
                    <IconSvgSelector id="small_rain_sun" />
                </div>
            
                <div className={s.day__time}>
                    <p>Время: <span>21:54</span></p>
                </div>
                <div className={s.day__city}>
                    <p>Город: <span>Санкт-Петербург</span></p>
                </div>
            </div>
            <div className={s.day__info_items}>
                {
                    items.map((item: Item) => {
                        return  <ThisDayItem key={item.icon_id} item={item}/>
                    })
                }
            </div>
        </div>
    </>
    
  )
}

export default Popup

//<AiOutlineCloseCircle className={s.close}/>