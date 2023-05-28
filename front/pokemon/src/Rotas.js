import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import AddTipo from './pages/adicionar/AddTipo'
import AddPokemon from './pages/adicionar/AddPokemon'
import AtualizaTipo from './pages/atualizar/AtualizaTipo'
import AtualizaPokemon from './pages/atualizar/AtualizaPokemon'
import DetalheTipo from './pages/detalhes/DetalhesTipo'
import DetalhePokemon from './pages/detalhes/DetalhesPokemon'
import Tipos from './pages/home/Tipos'

function Rotas() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/tipos' element={<Tipos />} />

      {/** adicionar */}
      <Route path='/add-tipo' element={<AddTipo />} />
      <Route path='/add-pokemon' element={<AddPokemon />} />

      {/** atualizar */}
      <Route path='/atualiza-tipo/:id' element={<AtualizaTipo />} />
      <Route path='/atualiza-pokemon/:id' element={<AtualizaPokemon />} />

      {/** detalhes */}
      <Route path='/detalhe-tipo/:id' element={<DetalheTipo />} />
      <Route path='/detalhe-pokemon/:id' element={<DetalhePokemon />} />
    </Routes>
  )
}

export default Rotas