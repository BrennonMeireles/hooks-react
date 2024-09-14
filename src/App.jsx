import { useState } from 'react'
import "./App.css"
import Contador from './class/hooks/useState/count'
import ListaUsuarios from './class/hooks/useEffect/loading'
import Accordion from './class/hooks/useState/accordion'
import Modal from './class/hooks/useState/modal'
import CountEffect from './class/hooks/useEffect/count-effect'
import PokemonAPI from './class/hooks/pokemon-api'

function App() {

  return (
    <>
        <p>Contador component</p>
      <div className="container">
        <Contador />
      </div>

      <div className="container">
          <p>Accordion Component</p>
          <Accordion />

      </div>

      <p>Consumo de API </p>
      <ListaUsuarios />
      
      <div className='container'>
        <p>Modal Component</p>
        <Modal />
      </div>

      <CountEffect />

      <PokemonAPI />
    </>
  )
}

export default App
