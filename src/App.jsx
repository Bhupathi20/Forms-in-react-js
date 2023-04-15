
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Axios from 'axios'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { Contact } from './pages/Contact'
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import { useState, createContext } from 'react'
import { Navbar } from './Navbar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Form from "./components/Form"

function App() {

  return(
    <div className='App'>
      <Form />
    </div>
  )

} 


export default App
