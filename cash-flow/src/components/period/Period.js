import React from 'react'
import styles from './Period.module.css'

import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const Period = ({period}) => {
  return (
    <div className={styles.container}>
        <h3>{period}</h3>
        <CalendarMonthOutlinedIcon/>
    </div>
  )
}

export default Period