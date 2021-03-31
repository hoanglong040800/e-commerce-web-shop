import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const classes = useStyles()

  return (
    <AppBar className={classes.root} position="sticky">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          E-Commerce Shop
        </Typography>

        <div>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/about" className={classes.link}>
            About
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#a20bd9',
  },
  title: {
    flex: 1,
    fontFamily: 'Satisfy',
    fontSize: 25,
  },
  link: {
    marginLeft: 20,
    color: '#fff',
    fontFamily: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}))

export default NavBar
