import { Products } from './'
import MainLayout from './layouts/MainLayout'

const Home = () => {
  return (
    <MainLayout>
      <h1 style={{ fontSize: 30 }}>Home</h1>

      <Products />
    </MainLayout>
  )
}

export default Home
