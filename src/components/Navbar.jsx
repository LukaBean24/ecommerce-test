import { Typography } from '@mui/material'
import React from 'react'
import classes from '../styles/Navbar.module.scss'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import MenuIcon from './MenuIcon'
import { uiActions } from '../store/uiSlice'
import { useDispatch } from 'react-redux'

const Navbar = () => {
  const dispatch = useDispatch()
  const openCart = () => {
    dispatch(uiActions.openModal())
  }
  return (
    <div className={classes.container}>
      <div className={classes.navbar}>
        <div className={classes.logo}>
          <MenuIcon />
          <Typography variant='h5' className={classes['logo-text']}>
            Digital Space
          </Typography>
        </div>
        <div className={classes.navlinks}>
          <AiOutlineShoppingCart className={classes.icon} onClick={openCart} />
          <AiOutlineUser className={classes.icon} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
