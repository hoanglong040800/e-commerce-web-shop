import { makeStyles } from '@material-ui/core'
import { NavBar, Footer } from '../../components'

const MainLayout = ({ children }) => {
  const classes = useStyle()

  return (
    <div className={classes.root}>
      <NavBar />

      <main className={classes.main}>{children}</main>

      <Footer />
    </div>
  )
}

const useStyle = makeStyles(theme => ({
  root: {
    backgroundColor: '#fcfcfc',
  },
  main: {
    margin: '50px 10px',
  },
}))

export default MainLayout
