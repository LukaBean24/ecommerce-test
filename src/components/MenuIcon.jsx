import React from 'react'
import { useDispatch } from 'react-redux'
import { uiActions } from '../store/uiSlice'
import classes from '../styles/MenuIcon.module.scss'

const MenuIcon = () => {
  const dispatch = useDispatch()
  const menuClickHandler = () => {
    dispatch(uiActions.toggleDrawer())
  }
  return (
    <div className={classes.burger} onClick={menuClickHandler}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default MenuIcon
