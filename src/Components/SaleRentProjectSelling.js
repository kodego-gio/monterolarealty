import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'


function SaleRentProjectSelling() {
  return (
    <Grid container spacing={3}>
        <Grid item xs={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    src={require('../imgs/alveo.png')}
                    alt="ALVEO"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>   
              </Card>
              
          </Grid>
          <Grid item xs={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    src={require('../imgs/alveo.png')}
                    alt="ALVEO"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>   
              </Card>
              
          </Grid>
          <Grid item xs={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    src={require('../imgs/alveo.png')}
                    alt="ALVEO"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>   
              </Card>
              
        </Grid>
    </Grid>
  )
}

export default SaleRentProjectSelling