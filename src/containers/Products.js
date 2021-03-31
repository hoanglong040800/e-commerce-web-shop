import { Grid } from '@material-ui/core'

import { ProductCard } from '../components'

const products = [
  {
    id: 1,
    name: 'Sneakers',
    description: 'Running Shoe',
    price: '3 250 000',
    image:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-running-shoes-2021-1609848671.png?crop=0.502xw:1.00xh;0.498xw,0&resize=640:*',
  },
  {
    id: 2,
    name: 'Dell Laptop',
    description: 'Laptop for work',
    price: '15 000 000',
    image:
      'https://laptopnano.vn/upload/product/dell-xps-l321x-core-i52467m-ram-4g128-ssd-may-sieu-mong-vo-nhom-14kg-nguyen-zin30122.JPG',
  },
  {
    id: 3,
    name: 'Sneakers',
    description: 'Running Shoe',
    price: '3 250 000',
    image:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-running-shoes-2021-1609848671.png?crop=0.502xw:1.00xh;0.498xw,0&resize=640:*',
  },
  {
    id: 4,
    name: 'Dell Laptop',
    description: 'Laptop for work',
    price: '15 000 000',
    image:
      'https://laptopnano.vn/upload/product/dell-xps-l321x-core-i52467m-ram-4g128-ssd-may-sieu-mong-vo-nhom-14kg-nguyen-zin30122.JPG',
  },
  {
    id: 5,
    name: 'Sneakers',
    description: 'Running Shoe',
    price: '3 250 000',
    image:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-running-shoes-2021-1609848671.png?crop=0.502xw:1.00xh;0.498xw,0&resize=640:*',
  },
  {
    id: 6,
    name: 'Dell Laptop',
    description: 'Laptop for work',
    price: '15 000 000',
    image:
      'https://laptopnano.vn/upload/product/dell-xps-l321x-core-i52467m-ram-4g128-ssd-may-sieu-mong-vo-nhom-14kg-nguyen-zin30122.JPG',
  },
]

const Products = () => {
  return (
    <Grid container justify="center">
      {products.map(el => (
        <Grid item xs={6} sm={4} md={3} lg={3}>
          <ProductCard key={el.id} product={el} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Products
