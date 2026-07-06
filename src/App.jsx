import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { NavigationBar } from './components/NavigationBar/NavigationBar.jsx'
import { CartPage } from './pages/CartPage/CartPage.jsx'
import { HomePage } from './pages/HomePage/HomePage.jsx'
import { ShopPage } from './pages/ShopPage/ShopPage.jsx' 
import { Outlet } from 'react-router-dom'
import { usePokemonData } from './hooks/customHook.js'

function App() {
  const { addedToCart, handleAddToCart, handleRemoveToCart, handleIncrease, handleDecrease } = usePokemonData();

  function handleAddToCartBtn(amount, pokemon){
      handleAddToCart(parseInt(amount), pokemon)
      alert("added to cart!")
  }
  
  return (
    <div className='app-container'>
      <NavigationBar addedToCart={addedToCart} />
      <Outlet context={{handleAddToCartBtn, addedToCart, handleRemoveToCart, handleIncrease, handleDecrease}} />
    </div>
  )
}

export default App
