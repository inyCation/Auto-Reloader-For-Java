import { Outlet } from 'react-router-dom'
import SideNav from './components/SideNav'
import TopNav from './components/TopNav'

function App() {
  

  return (
    <>
      <SideNav />
      <TopNav />
      <Outlet />
    </>
  )
}

export default App
