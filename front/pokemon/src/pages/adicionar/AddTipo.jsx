import { Alert, Container, FormControl, Snackbar, TextField } from '@mui/material'
import React, { useState } from 'react'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { LoadingButton } from '@mui/lab'

const AddTipo = () => {
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [sucesso, setSucesso] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleClick = () => {
    setLoading(true)
    api.post('/tipos', {
      nome:nome,
      descricao:descricao
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
      <h2>Cadastre um novo tipo de pokemon</h2>
      <hr />
      <FormControl fullWidth>
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
        <LoadingButton loading={loading} variant='contained' onClick={handleClick}>
          Criar
        </LoadingButton>
      </FormControl>
    </Container>
  )
}

export default AddTipo