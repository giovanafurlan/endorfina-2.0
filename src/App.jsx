import React from 'react'
import Header from './components/header/Header.jsx'
import Corpo from './components/corpo/Corpo.jsx'
import Footer from './components/footer/Footer.jsx'
import './App.css'

export default function App() {

   return(
    <div className= "container">
      <Header/>
      <Corpo/>
      <Footer/>
    </div>
)}