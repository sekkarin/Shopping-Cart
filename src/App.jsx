import React from 'react'
import NavBar from './components/NavBar'
import Page from './components/Page'
import './App.css'
import { Provider, useSelector } from 'react-redux'
import { store } from './redux/store'
import MyCart from './pages/MyCart'
import Home from './components/Home'

const App = () => {
  const page = useSelector((state) => state.page.page);
  console.log("page",page);
  return (
    <>
      <NavBar />
      {
        page ? <Home /> : <MyCart />
      }
    </>

  )
}

export default App;