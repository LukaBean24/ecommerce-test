import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from '../styles/SideDrawer.module.scss'
import { AiOutlineMobile } from 'react-icons/ai'
import { GiConsoleController } from 'react-icons/gi'
import { BsLaptop } from 'react-icons/bs'
import { Typography } from '@mui/material'
import { uiActions } from '../store/uiSlice'

const SideDrawer = () => {
  const drawer = useSelector((state) => state.ui.drawerOpen)
  const dispatch = useDispatch()
  return (
    <div className={`${classes.sidedrawer} ${drawer ? classes.expanded : ''} `}>
      <div className={classes.icons}>
        <span
          onClick={() => {
            dispatch(uiActions.setFilter('mobile'))
          }}
        >
          <AiOutlineMobile />
          <Typography color='primary' className={classes.label}>
            Mobile Phones
          </Typography>
        </span>
        <span
          onClick={() => {
            dispatch(uiActions.setFilter('gaming'))
          }}
        >
          <GiConsoleController />
          <Typography color='primary' className={classes.label}>
            Gaming Consoles
          </Typography>
        </span>
        <span
          onClick={() => {
            dispatch(uiActions.setFilter('laptop'))
          }}
        >
          <BsLaptop />
          <Typography color='primary' className={classes.label}>
            Laptops
          </Typography>
        </span>
      </div>
    </div>
  )
}

export default SideDrawer
