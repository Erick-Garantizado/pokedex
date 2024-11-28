import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
import { Box, Container,  } from '@mui/material'

const DetalheTipo = () => {
  const { id } = useParams()
  const [tipo, setTipo] = useState([])

  useEffect(() => {
    api.get(`/tipos/${id}`)
    .then(({ data }) => {
      setTipo(data[0])
    })
    .catch((error) => {
      alert(error)
    })
  }, [id])

  return (
    <>
      <Container>
            <Box >
              <Box>
                <h2>{ tipo.nome }</h2><hr />                
                <h3>Descrição: <br /> { tipo.descricao }</h3>
              </Box>
            </Box>
          </Container>
    </>
  )
}

export default DetalheTipo