import React from 'react'
import s from './Header.module.scss';
import IconSvgSelector from '../../assets/icons/IconSvgSelector';
import {BiSolidDropletHalf} from 'react-icons/bi';
import Select from 'react-select';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../context/ThemeContext';

type Props = {}

const Header = (props: Props) => {
  const theme = useTheme();
  const options = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'},
  ]

  const colourStyles = {
    control: (styles: any) => ({
       ...styles,
       backgroundColor: theme.theme === Theme.DARK ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
       width: '194px',
       height: '37px',
       border: 'none',
       borderRadius: '10px',
       zIndex: 700,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? '#fff' : '#000',
   }),

  }

  function changeTheme(){
     theme.changeTheme(theme.theme === Theme.LIGHT  ? Theme.DARK : Theme.LIGHT);
  }

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
          <div className={s.logo}>
            <IconSvgSelector id="logo" />
          </div>
          <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
          <div className={s.change_theme} onClick={changeTheme}> 
              <BiSolidDropletHalf size={24} color="#4793FF" />
          </div>
          <Select styles={colourStyles} options={options} />
      </div>
    </header>
  )
}
export default Header