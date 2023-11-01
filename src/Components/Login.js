import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'

function Login() {
  return (
    <Box className="box-login">
      <Typography variant='h4' className='typographyHeader-login'>Login</Typography>
        <TextField id="" fullWidth label={"Email"}type= 'email'  variant="standard" /><br></br>
        <TextField id="" fullWidth label={"Password"} type='password' variant="standard" /><br></br>
        <Button fullWidth className='btn-login' variant='contained' color='info'>LOGIN</Button>
      <Typography variant='p' sx={{ marginTop: 2, textAlign: 'center' }}>&copy; 2023 Monterola Realty.<br></br> All Rights Reserved.</Typography>
    </Box>
  )
}

export default Login
