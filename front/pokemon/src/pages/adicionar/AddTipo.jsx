import { Alert, Box, Container, FormControl, Snackbar, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import api from '../../services/api'
// import { useNavigate } from 'react-router-dom'
import { LoadingButton } from '@mui/lab'

const AddTipo = () => {
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [sucesso, setSucesso] = useState(false)
  const [error, setError] = useState('')
  const [color, setColor] = useState('#007fff');
  // const navigate = useNavigate()

  const handleClick = () => {
    setLoading(true)
    api.post('/tipos', {
      nome:nome,
      descricao:descricao,
      cor:color
    })
    .then(()=>{
      setSucesso(true)
      setNome('')
      setDescricao('')
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
  }

  

  return (
    <Container>
      <Snackbar open={sucesso} autoHideDuration={6000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <Alert severity="success" sx={{ width: '100%' }}>
                Tipo cadastrado com sucesso
            </Alert>
      </Snackbar>
      <Snackbar open={open} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert severity='error' sx={{ width:'100%' }}>
          {error}
        </Alert>
      </Snackbar>

      <Box sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center', }}>
        <Typography className='bungee-spice-regular' variant=''>
          Crie um tipo de pokemon
        </Typography>
        
        <FormControl sx={{ marginTop:5, width: '40%' }} >
          <TextField 
          label="Nome" 
          variant='outlined' 
          value={nome} 
          onChange={(e) => {setNome(e.target.value)}}/><br />

          <TextField 
          label="Descrição" 
          variant='outlined'
          value={descricao}
          onChange={(e) => {setDescricao(e.target.value)}}/><br />

          <Stack spacing={1} sx={{ alignItems: 'center' }}>
            <Typography
              component="label"
              variant="body2"
              sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}
            >
              Escolha a cor do botão
              <input
                type="color"
                value={color}
                onChange={(event) => setColor(event.target.value)}
              />
            </Typography>
            <Box
              component="div"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minWidth: 75,
                minHeight: 75,
                borderRadius: 2,
                backgroundColor: 'var(--bg)',
              }}
              style={{ '--bg': color }}>
                { nome }
            </Box>
          </Stack>

          <LoadingButton loading={loading} variant='contained' onClick={handleClick} sx={{ marginTop:5, }}>
            Criar
          </LoadingButton>
        </FormControl>
      </Box>
    </Container>
  )
}

export default AddTipo