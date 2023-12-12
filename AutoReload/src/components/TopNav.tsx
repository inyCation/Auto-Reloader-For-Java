import React from 'react'

const TopNav: React.FC = () => {
  return (
    <div className='topnav'>
        <div className="heading">
            <p>trppd_</p>
        </div>
        <ul className='menu'>
            <li>My Collection</li>
            <li> | </li>
            <li>Iny Cation</li>
            <div className="circle"></div>
        </ul>
    </div>
  )
}

export default TopNav