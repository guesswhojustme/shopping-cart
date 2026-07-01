import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { NavigationBar } from './components/NavigationBar/NavigationBar.jsx'
import { CartPage } from './pages/CartPage/CartPage.jsx'
import { HomePage } from './pages/HomePage/HomePage.jsx'
import { ShopPage } from './pages/ShopPage/ShopPage.jsx' 

function App() {
  return (
    <>
     <NavigationBar></NavigationBar>
    </>
  )
}

export default App
