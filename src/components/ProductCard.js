import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardMedia
        style={{ height: 150 }}
        image={product.image}
        title={product.name}
      />

      <CardContent>
        <Typography variant="h6">{product.name}</Typography>

        <Typography variant="body1" color="textSecondary">
          {product.description}
        </Typography>
      </CardContent>

      <CardActions
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="body2">{product.price}đ</Typography>

        <IconButton aria-label="Add">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default ProductCard
