import { Outlet } from 'react-router'
import { Footer } from './Footer/Footer'
import { MainContainer } from './MainContainer/MainContainer'
import { Navbar } from './Navbar/Navbar'

export const Layout = () => (
  <>
    <Navbar />
    <MainContainer>
      <Outlet />
    </MainContainer>
    <Footer />
  </>
)
