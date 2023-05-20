import React from 'react'

import Home from './componenets/Home/Home'
import Navbar from './componenets/Nav/Nav'
import ItemProduct from './componenets/Product/ItemProduct'
import Adverting from './componenets/Addvert/Advert'
import NewProductItem from './componenets/New-Product/NewProduct'
import Previewing from './componenets/Preview/Preview'
import Footering from './componenets/Footer/Footering'
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <ItemProduct/>
      <Adverting />
      <NewProductItem />
      <Previewing />
      <Footering />
    </>
  )
}

export default App