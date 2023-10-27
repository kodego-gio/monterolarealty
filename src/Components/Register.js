import { Box, Button, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

function Register() {
    const [selected, setSelected] = useState('');
    
    const selectionChangeHandler = (event) => {
        setSelected(event.target.value)
  };

  return (
          <Box className="box-register">
          <Typography variant='h4' className='typographyHeader-register'>Register</Typography>
            <TextField id="" sx={{ width: 500 }} label={"Firstname"} type='email' variant="standard" /><br></br>
            <TextField id="" sx={{width:500}} label={"Lastname"}type= 'email'  variant="standard" /><br></br>
            <TextField id="" sx={{width:500}} label={"Email"}type= 'email'  variant="standard" /><br></br>
            <TextField id="" sx={{ width: 500 }} label={"Password"} type='password' variant="standard" /><br></br>
            <InputLabel className='register-inputlabel-whatareyou' sx={{ width: 500 }} shrink >What are you?</InputLabel>
            <Select sx={{ width: 500 }} className='register-select' displayEmpty value={selected} onChange={selectionChangeHandler} variant="standard">              
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
          <FormHelperText className='register-select-formhelper' sx={{ colorText:'red'}}><em>*Please select if you are a Vendor or a Buyer.</em></FormHelperText>
            <Button sx={{width:300, marginTop:2}} className='btn-register' variant='contained' color='info'>Submit</Button>
          <Typography variant='p' sx={{ marginTop:2, textAlign:'center'}}>&copy; 2023 Monterola Realty. All Rights Reserved.</Typography>
        </Box>
  )
}

export default Register