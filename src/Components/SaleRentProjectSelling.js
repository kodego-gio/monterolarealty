import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'


function SaleRentProjectSelling() {
  return (
    <Grid className='mycarousel' container spacing={3}>
          <Grid item xs={3} md={4}>
              <Card className='cls-card1-homepage' sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    src={require('../imgs/for_sale.webp')}
                    alt="For Sale"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    For Sale
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>   
              </Card>        
          </Grid>
          <Grid item xs={3} md={4}>
              <Card className='cls-card2-homepage' sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    src={require('../imgs/for_rent.webp')}
                    alt="For Rent"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    For Rent
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>   
              </Card>            
          </Grid>
          <Grid item xs={3} md={4}>
              <Card className='cls-card3-homepage' sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    src={require('../imgs/preselling.webp')}
                    alt="Preselling Projects"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Preselling Projects
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