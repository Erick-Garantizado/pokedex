import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
import { Box, Container,  } from '@mui/material'

const DetalhePokemon = () => {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState([])
  const [enderecoImg, setEnderecoImg] = useState('')
  
  useEffect(() => {
    api.get(`/pokemons/${id}`)
    .then(({ data }) => {
      setPokemon(data)
      
    })
    .catch((error) => {
      alert(error)
    })
  }, [])
  return (
    <Container>
      {
        pokemon.map((poke, index) => (
          <>
            <Box >
              <Box>
                <img src={process.env.REACT_APP_HOST_API + poke.imagem} alt={poke.nome + "-img"}  />
              </Box>
              <Box>
                <h2>{ poke.nome }</h2><hr />
                <h3>Habilidade: { poke.habilidades }</h3>
                { 
                  poke.tipo ? 
                  ( <h3>Tipo: {poke.tipo.nome} </h3> ) : 
                  ( <h3>Tipo: Indefinido </h3> )
                }
                
              </Box>
            </Box>
          </>
        ))
      }
    </Container>
  )
}

export default DetalhePokemon