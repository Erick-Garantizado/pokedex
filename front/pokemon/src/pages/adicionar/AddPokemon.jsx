import { Alert, Box, Container, FormControl, MenuItem, Select, Snackbar, TextField } from '@mui/material'
import FileUpload from 'react-mui-fileuploader'
import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { LoadingButton } from '@mui/lab'

const AddPokemon = () => {
  const [imagem, setImagem] = useState('')
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [sucesso, setSucesso] = useState(false)
  const [tipos, setTipos] = useState([])
  const [tipoPokemon, setTipoPokemon] = useState()
  const [error, setError] = useState('')
  const [nome, setNome] = useState('')
  const [habilidades, setHabilidades] = useState('')


  useEffect(() => {
    api.get('/tipos')
    .then( ({ data }) => {
      setTipos(data)
      console.log(data)
    })
    .catch((e) => {
      setOpen(true)
      setError(e.config.message)
    })
    .finally(() => {
      setLoading(false)
      setTimeout(() => {
        setOpen(false)
        setSucesso(false)
      }, 2000)
    })
  }, [])

  const fileChange = (files) => {
      setImagem(files[0])
  }

  const handleSubmit = () => {
    setLoading(true)
    const formData = new FormData()
    formData.append('nome', nome)
    formData.append('habilidades', habilidades)
    formData.append('imagem', imagem)
    formData.append('tipo', tipoPokemon)
    const headers = {
      headers: {
        'Content-type': 'multipart/form-data'
      }
    }
    api.post('/pokemons', formData, headers)
    .then(() => {
      setSucesso(true)
      setNome('')
      setHabilidades('')
      setImagem()
    })
    .catch((e) => {
      setOpen(true)
      setError(e.response)
    })
    .finally(() => {
      setTimeout(() => {
        setSucesso(false)
        setLoading(false)
        setOpen(false)
      }, 2000);
    })
  }

  return (
    <Container>
      <Snackbar open={sucesso} autoHideDuration={6000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <Alert severity="success" sx={{ width: '100%' }}>
                Pokemon cadastrado com sucesso
            </Alert>
      </Snackbar>
      <Snackbar open={open} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert severity='error' sx={{ width:'100%' }}>
          {error}
        </Alert>
      </Snackbar>
        <h2>Insira os dados do seu novo pokemon</h2>
        <hr />
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <TextField 
          label="Nome" 
          variant="outlined"
          value={nome} 
          onChange={(e) => {setNome(e.target.value)}}/><br />

          <TextField 
          label="Habilidades" 
          variant="outlined"
          value={habilidades} 
          onChange={(e) => {setHabilidades(e.target.value)}}/><br />
          
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={tipoPokemon}
            onChange={(e) => {setTipoPokemon(e.target.value)}}>
              {
                tipos.map((tipo) => (
                  <MenuItem value={tipo.id}> { tipo.nome } </MenuItem>
                ))
              }
          </Select><br />
          <FileUpload
              title=''
              header="Arraste para esta área"
              leftLabel="ou"
              buttonLabel="Clique aqui"
              rightLabel="para selecionar"
              onFilesChange={fileChange}
          /><br />
          <LoadingButton loading={loading} variant='contained' onClick={handleSubmit}>
            Enviar
          </LoadingButton>
        </FormControl>
      </Box>
    </Container>
  )
}

export default AddPokemon