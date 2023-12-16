import { useState } from 'react';

import { Outlet } from 'react-router-dom'
import SideNav from './components/SideNav'
import TopNav from './components/TopNav'

function App() {
  const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(true);

  const toggleSideNav = () => {
    setIsSideNavOpen((prev) => !prev);
  };

  return (
    <>
       <SideNav isMenuOpen={isSideNavOpen} />
      <TopNav toggleSideNav={toggleSideNav} isMenuOpen={isSideNavOpen} />
      <Outlet />
    </>
  )
}

export default App
