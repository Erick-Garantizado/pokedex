import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { TableContainer, Table, TableBody, TableCell, TableRow, Paper, Button, Container, Typography, Box, Modal, Snackbar, Alert} from '@mui/material'
import { useNavigate } from 'react-router-dom'
// import { red } from '@mui/material/colors'
import { LoadingButton } from '@mui/lab'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Tipos = () => {
    const [open, setOpen] = useState(false);
    const [openErro, setOpenErro] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [loading, setLoading] = useState(false)
    const [sucesso, setSucesso] = useState(false)
    const [idExcluao, setIdExcluao] = useState(0)
    const [error, setError] = useState('')

    const [tipos, setTipos] = useState([])
    // const danger = red[800]
    const navigate = useNavigate()

    const handleExcluir = () => {
        setLoading(true)
        api.delete(`/tipos/${idExcluao}`)
        .then(() => {
            handleClose()
            setSucesso(true)
        })
        .catch((e) => {            
            setOpenErro(true)
            setError(e.config.message)
        })
        .finally(() => {
            setTimeout(() => {
                window.location.reload()
                setLoading(false)
                setOpenErro(false)
                setSucesso(false)
            }, 2000);
        })
    }

    useEffect(() => {
        api.get('/tipos')
        .then(({ data }) => {
            setTipos(data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])
    return (
    <Container>
        <Snackbar open={sucesso} autoHideDuration={6000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <Alert severity="success" sx={{ width: '100%' }}>
                Exclusão efetuada!
            </Alert>
        </Snackbar>
        <Snackbar open={openErro} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <Alert severity='error' sx={{ width:'100%' }}>
                {error}
            </Alert>
        </Snackbar>

        <Box marginTop={2} display={'flex'}>
            <Typography className='bungee-spice-regular' variant=''>
                TIPOS DE POKEMON
            </Typography>
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    
                    <TableBody>
                        {tipos.map((tipo, index) => (
                            <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell align="left">
                                <Button sx={{ marginX:'5px' }} style={{background: '#c62828' }}  variant='contained' onClick={() => {
                                    setIdExcluao(tipo.id)
                                    handleOpen()
                                }} >
                                    Excluir
                                </Button> 
                                <Button sx={{ marginX:'5px' }} style={{background: '#f9a825' }} variant='contained' onClick={() => {navigate(`/detalhe-tipo/${tipo.id}`)}}>
                                    Detalhes
                                </Button> 
                                <Button sx={{ marginX:'5px' }} variant='contained' onClick={() => {navigate(`/atualiza-tipo/${tipo.id}`)}}>
                                    Atualizar
                                </Button> 
                            </TableCell>
                            <TableCell align="left">
                                <Button variant='contained' sx={{ backgroundColor: tipo.cor }} >
                                    {tipo.nome}
                                </Button>
                            </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Alerta!
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Tem certeza que quer fazer esta exclusão?
                        </Typography><br />
                        <LoadingButton loading={loading} style={{background: '#388e3c' }}  variant='contained' onClick={handleExcluir}>
                            Sim
                        </LoadingButton> 
                        <Button style={{background: '#f9a825' }} variant='contained' onClick={handleClose}>
                            Não
                        </Button> 
                        </Box>
                    </Modal>

                </Table>
            </TableContainer>
        </Box>

    </Container>

    )
}

export default Tipos