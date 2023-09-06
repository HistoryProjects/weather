import React from 'react';
import s from './Home.module.scss';
import ThisDay from './components/ThisDay/ThisDay';
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo';
import {Days} from './components/Days/Days';

type Props = {}

const Home = (props: Props) => {
  return (
    //class home in file Home.modue.scss
    <div className={s.home}>
        <div className={s.day_wrapper}>
            <ThisDay />
            <ThisDayInfo />
        </div>

        <Days />
    </div>

  )
}

export default Home; 