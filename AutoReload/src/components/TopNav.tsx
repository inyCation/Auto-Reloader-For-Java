import React from 'react'
import { LuMenuSquare } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

interface TopNavProps {
  toggleSideNav: ()=>void;
  isMenuOpen: boolean;
}

const TopNav: React.FC<TopNavProps> = ({toggleSideNav,isMenuOpen}) => {

  const downloadScript = async () =>{
    try {
        const script  = await fetch("../../src/assets/run.sh");
        const content = await script.text();
        const blob = new Blob([content], { type: 'application/x-sh' });
        const a = document.createElement('a');
        a.download = 'run.sh';
        a.href = window.URL.createObjectURL(blob);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    } catch (error) {
      console.log("ERROR", error)
    }
  }





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
        <a onClick={downloadScript}>Download</a>
        <div className="circle"></div>
      </ul>
    </div>
  )
}

export default TopNav