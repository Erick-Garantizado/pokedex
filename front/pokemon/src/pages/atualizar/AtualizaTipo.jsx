import { Alert, Container, FormControl, Snackbar, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { useNavigate, useParams } from 'react-router-dom'
import { LoadingButton } from '@mui/lab'

const AtualizaTipo = () => {
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [sucesso, setSucesso] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    api.get(`/tipos/${id}`)
    .then(( {data} ) => {
      setNome(data[0].nome)
      setDescricao(data[0].descricao)
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

  const handleAtualiza = () => {
    api.put(`/tipos/${id}`, {
      nome:nome,
      descricao, descricao
    })
    .then(() => {
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
              Dados atualizados
            </Alert>
      </Snackbar>
      <Snackbar open={open} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert severity='error' sx={{ width:'100%' }}>
          {error}
        </Alert>
      </Snackbar>
      <h2>Atualize os dados</h2>
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
        <LoadingButton loading={loading} variant='contained' onClick={handleAtualiza}>
          Atualizar
        </LoadingButton>
      </FormControl>
    </Container>
  )
}

export default AtualizaTipo