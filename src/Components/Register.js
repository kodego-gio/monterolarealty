import { Box, Button, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

function Register() {
    const [selected, setSelected] = useState('');
    
    const selectionChangeHandler = (event) => {
        setSelected(event.target.value)
  };

  return (
          <Box component='form' className="box-register">
          <Typography variant='h4' className='typographyHeader-register'>Register</Typography>
            <TextField id="" fullWidth label={"Firstname"} type='email' variant="standard" /><br></br>
            <TextField id="" fullWidth label={"Lastname"}type= 'email'  variant="standard" /><br></br>
            <TextField id="" fullWidth label={"Email"}type= 'email'  variant="standard" /><br></br>
            <TextField id="" fullWidth label={"Password"} type='password' variant="standard" /><br></br>
            <InputLabel className='register-inputlabel-whatareyou' shrink ><h3>What are you?</h3></InputLabel>
            <Select fullWidth className='register-select' displayEmpty value={selected} onChange={selectionChangeHandler} variant="standard">              
              <MenuItem value="">
                  Please select
              </MenuItem>
              <MenuItem value={1}>
                  Vendor
              </MenuItem>
              <MenuItem value={2}>
                  Buyer
                </MenuItem>
            </Select>
          <FormHelperText className='register-select-formhelper'><em>*Please select if you are a Vendor or a Buyer.</em></FormHelperText>
            <Button className='btn-register' variant='contained' color='info'>Submit</Button>
          <Typography variant='p' sx={{ marginTop:2, textAlign:'center'}}>&copy; 2023 Monterola Realty. All Rights Reserved.</Typography>
        </Box>
  )
}

export default Register