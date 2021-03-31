import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

const ProductCard = ({ product }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cardMedia}
        image={product.image}
        title={product.name}
      />

      <CardContent>
        <Typography variant="h6">{product.name}</Typography>

        <Typography variant="body1" color="textSecondary">
          {product.description}
        </Typography>
      </CardContent>

      <CardActions className={classes.cardFooter}>
        <Typography variant="body2">{product.price}đ</Typography>

        <IconButton aria-label="Add">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    margin: 10,
  },
  cardMedia: {
    height: 150,
  },
  cardFooter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}))

export default ProductCard
