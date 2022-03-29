import React from 'react'
import { useSelector } from 'react-redux'
import Container from '../components/Container'
import MainSlider from '../components/MainSlider'
import Modal from '../components/Modal'
import Navbar from '../components/Navbar'
import ProductModal from '../components/ProductModal'
import SideDrawer from '../components/SideDrawer'

const Home = () => {
  const modal = useSelector((state) => state.ui.modalOpen)
  const productModal = useSelector((state) => state.ui.productOpen)
  return (
    <>
      {modal && <Modal />}
      {productModal && <ProductModal />}
      <Navbar />
      <SideDrawer />
      <MainSlider />
      <Container />
    </>
  )
}

export default Home
