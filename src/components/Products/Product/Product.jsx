import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@mui/material'
import {AddShoppingCart} from '@mui/icons-material'

import useStyles from './styles'

const Product = ({product}) => {
    const classes = useStyles()

  return (
      <Card className={classes.root}>
          <CardMedia className={classes.media} image={product.image} title={product.name} />
          <CardContent>
              <div className={classes.cardContent}>
                <Typography variant="h5" gutterButton component='h2'>
                    {product.name}
                </Typography>
                <Typography variant="h5" gutterButton component='h2'>
                    {product.price}
                </Typography>
              </div>
              <Typography variant='body2' color='textSecondary'>
                  {product.description}
              </Typography>
              <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label='Add to Cart'>
                    <AddShoppingCart />
                </IconButton>
              </CardActions>
          </CardContent>
      </Card>

  )
}

export default Product;
