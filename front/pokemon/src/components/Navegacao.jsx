import { AppBar, Box, Drawer, IconButton, List, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Home, Add, CatchingPokemon } from '@mui/icons-material'
import React, { useState } from 'react'
import ItemDaLista from './ItemDaLista'

const Navegacao = () => {
  const [drawer, setDrawer] = useState(false)
  // const [anchorEl, setAnchorEl] = useState(null) 
  // const open = Boolean(anchorEl)
  
  const handleClick = (event) => {
    setDrawer(true)
  }


  return (
    <>
        <AppBar style={{background: '#e53e3e'}}  position='static' >
        <Toolbar >
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            id="basic-button"
            //aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            //aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>
            <MenuIcon />
            </IconButton>
        <Typography variant='h5' sx={{ flexGrow:1 }}>
          
        </Typography>
        </Toolbar>
        </AppBar>
        <Drawer open={drawer} onClose={(e) => setDrawer(false)}>
            <Box sx={{ width: 250, height:250 }}>
                <List>
                  <ItemDaLista texto='Home' icone={<Home/>} link="/"  />
                  <ItemDaLista texto='Tipos de pokemons' icone={<CatchingPokemon/>} link="/tipos" />
                  <ItemDaLista texto='Adicionar tipo' icone={<Add/>} link="/add-tipo"/>
                  <ItemDaLista texto='Adicionar pokemon' icone={<Add/>} link="/add-pokemon"/>
                </List>
            </Box>
        </Drawer>
    </>
    
  )
}

export default Navegacao