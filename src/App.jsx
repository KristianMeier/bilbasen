import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from './Components/Layout/Layout'
import { LandingPage } from './Pages/LandingPage/LandingPage'

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<LandingPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
