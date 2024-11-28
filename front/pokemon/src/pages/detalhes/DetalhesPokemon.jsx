import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
import { Box, Button, Card, Container, Typography,  } from '@mui/material'

const DetalhePokemon = () => {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState([])
  // const [enderecoImg, setEnderecoImg] = useState('')
  
  useEffect(() => {
    api.get(`/pokemons/${id}`)
    .then(({ data }) => {
      setPokemon(data)
      console.log(data) 
    })
    .catch((error) => {
      alert(error)
    })
  }, [id])
  return (
    <Container>
      {
        pokemon.map((poke, index) => (
          
          <Box key={index} mt={5} mb={3} sx={{display:'flex', flexDirection:'column',  alignItems:'center' }}>
            <Box sx={{display:'flex', flexDirection:'column',  alignItems:'center'}}>
              <img src={process.env.REACT_APP_HOST_API + poke.imagem} alt={poke.nome + "-img"}
              height="300" />
            </Box>
            <Card sx={{ padding: '10px', width: '30%' }}>
              <Typography variant='h4'>
                { poke.nome }
              </Typography>
              <Typography>
                Habilidade: { poke.habilidades }
              </Typography>
              { 
                poke.tipo ? 
                ( <Typography>
                    Tipo: <Button variant='contained' sx={{ backgroundColor: poke.tipo.cor }} > {poke.tipo.nome} </Button> 
                  </Typography> ) 
                : 
                ( <Typography>Tipo: Indefinido </Typography> )
              }              
            </Card>
          </Box>          
        ))
      }
    </Container>
  )
}

export default DetalhePokemon