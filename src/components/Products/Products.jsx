import React from "react";
import { Grid } from '@mui/material'
import Product from './Product/Product'
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useStyles from './styles'

const theme = createTheme()

const products = [
    {id: 1, name: 'Shoes', description: 'Running Shoes', price: "$49", image: 'https://media.kohlsimg.com/is/image/kohls/3798326_Gray_Platinum?wid=600&hei=600&op_sharpen=1'},
    {id: 2, name: 'Watches', description: 'Apple Wach', price: "$199", image: 'https://www.sbsupply.eu/media/catalog/product/cache/16/image/800x/602f0fa2c1f0d1ba5e241f914e856ff9/a/p/apple_sport_band_apple_watch_38mm_40mm_red1_2.jpg'},
    {id: 3, name: 'Monitor', description: 'Dell Monitor', price: "$299", image: 'https://www.bechtle.com/shop/medias/600ee9ed7615962836849d3f-900Wx900H-820Wx820H?context=bWFzdGVyfHJvb3R8MTA3NDA1fGltYWdlL2pwZWd8aDc4L2hjMC8xMTU3NjY2MzcwMzU4Mi5qcGd8N2MyNWFjYzI1NWFlYmIxYTJiNmI0NzJlMmQ2NDc2ZDViYWE5NDZkMzkxMTA4ZTA3NWNlNjY4NTNlMGMyMmY4MA'},
]

const Products = () => {
    const classes = useStyles() 

    return (
    <ThemeProvider theme={theme}>
        <main className={classes.content}>
        <div className={classes.toolbar} />
            <Grid container justifyContent="center" spacing={4}>
            {
                products.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))
            }
            </Grid>
        </main>
    </ThemeProvider>
    )
};

export default Products;
