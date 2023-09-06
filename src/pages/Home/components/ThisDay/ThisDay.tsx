import React from 'react'
import s from './ThisDay.module.scss';
import IconSvgSelector from '../../../../assets/icons/IconSvgSelector';

type Props = {}

const ThisDay = (props: Props) => {
  return (
    <div className={s.this__day}>
        <div className={s.top__block}>
            <div className={s.this__temp}>
                <span>20&deg;</span><br />
                Сегодня
            </div>
            <div className={s.this__weather}>
               <IconSvgSelector id="clear" />
            </div>
        </div>

        <div className={s.bottom__block}>
            <p>Время: <span>21:54</span></p>
            <p>Город: <span>Санкт-Петербург</span></p>
        </div>
    </div>
  )
}
export default ThisDay;