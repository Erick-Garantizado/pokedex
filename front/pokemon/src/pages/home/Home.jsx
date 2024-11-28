import { Container, Box, Typography, Card, CardActionArea, CardMedia, CardContent, Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import './home.css'

const Home = () => {

  const [pokemons, setPokemons] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    api.get("/pokemons")
    .then(({ data }) => {
      setPokemons(data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])
  
  return (
    <Container sx={{ display:'flex', flexDirection: 'column', alignItems:'center'}}>
      <Box marginTop={'20px'}>
        <Typography className='bungee-spice-regular' variant=''>
          MY POKEDEX
        </Typography>
      </Box>
      <Box sx={ {display:'flex', flexWrap:'wrap', justifyContent: 'space-around', gap:5 } }>
        
        { pokemons.map((pokemon, index) => (
          <Card sx={{ maxWidth: 345 }} key={index}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={ process.env.REACT_APP_HOST_API+pokemon.imagem }
                alt={pokemon.nome}
                onClick={() => {navigate(`/detalhe-pokemon/${pokemon.id}`)}}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  { pokemon.nome }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <Button variant='contained' sx={{ backgroundColor: pokemon.tipo.cor }} >
                  { pokemon.tipo.nome }
                </Button>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        )) }

      </Box>
    </Container>
  )
}

export default Home