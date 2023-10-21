import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import GoBoard from './components/go-board'
import './App.css'

export default function App() {

  return (
    <>
      <h1>Welcome to my Go app</h1>
      <GoBoard />
    </>
  )
}
