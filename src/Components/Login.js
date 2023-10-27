import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'

function Login() {
  return (
      <Box className="box-login"
          sx={{
              "hover": {
                  boxShadow: "10px 10px 20px #ccc",
              },
          }}>
          <Typography variant='h4' className='typographyHeader-login'>Login</Typography>
          <TextField id="" label={"Email"}type= 'email'  variant="standard" /><br></br>
          <TextField id="" label={"Password"} type='password' variant="standard" /><br></br>
          <Button className='btn-login' variant='contained' color='info'>LOGIN</Button>
          <Typography variant='p' sx={{ marginTop:2, textAlign:'center'}}>Monterola Realty</Typography>
    </Box>
  )
}

export default Login
