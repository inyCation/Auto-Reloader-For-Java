import React from 'react'
import { LuMenuSquare } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

interface TopNavProps {
  toggleSideNav: ()=>void;
  isMenuOpen: boolean;
}
const TopNav: React.FC<TopNavProps> = ({toggleSideNav,isMenuOpen}) => {

  return (
    <div className='topnav'>
      <div className="heading">
        <p>{!isMenuOpen?"":"0 & 1"}</p>
        <div className={`${isMenuOpen ? 'open_menu' : ''}`} onClick={toggleSideNav}>
          {isMenuOpen?(<LuMenuSquare />) : (<IoClose />)}
        </div>
      </div>
      <ul className='menu'>
        <a href={"https://github.com/inyCation/Auto-Reloader-For-Java"}>Documentation</a>
        <li> | </li>
        <a href={"../../src/assets/run.sh"} download={true}>Download</a>
        <div className="circle"></div>
      </ul>
    </div>
  )
}

export default TopNav