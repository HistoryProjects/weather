import React from 'react';
import s from './Days.module.scss';
import {Card} from './Card';
import {Tabs} from './Tabs';

type Props = {}

export interface Day {
    day: string,
    day_info: string,
    icon_id: string,
    temp_day: string,
    temp_night: string,
    info: string
}

export const Days = (props: Props) => {
  const days: Day[] = [
    {
        day: 'Сегодня',
        day_info: '28 авг',
        icon_id: 'small_rain_sun',
        temp_day: '+18',
        temp_night: '+15',
        info: 'Облачно'
    },
    {
        day: 'Завтра',
        day_info: '29 авг',
        icon_id: 'small_rain',
        temp_day: '+15',
        temp_night: '+10',
        info: 'Небольшой дождь'
    },
    {
        day: 'Пн',
        day_info: '30 авг',
        icon_id: 'small_rain_sun',
        temp_day: '+18',
        temp_night: '+15',
        info: 'Облачно'
    },
    {
        day: 'Вт',
        day_info: '31 авг',
        icon_id: 'sun',
        temp_day: '+21',
        temp_night: '+17',
        info: 'Ясно'
    },
    {
        day: 'Ср',
        day_info: '1 сен',
        icon_id: 'sun',
        temp_day: '+20',
        temp_night: '+15',
        info: 'Ясно'
    },
    {
        day: 'Чт',
        day_info: '2 сен',
        icon_id: 'mainly_cloudy',
        temp_day: '+16',
        temp_night: '+12',
        info: 'Пасмурно'
    },
    {
        day: 'Пт',
        day_info: '3 сен',
        icon_id: 'rain',
        temp_day: '+16',
        temp_night: '+10',
        info: 'Дождь'
    },
  ]
  return (
    <>
        <Tabs />
        <div className={s.days}>
            {
                days.map((day: Day) => (
                    <Card day={day}/>
                ))
            }
        </div>
    </>
    
  )
}