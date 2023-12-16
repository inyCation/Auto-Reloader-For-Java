import React from 'react'
import {Link} from "react-router-dom"

const Home: React.FC = () => {
  return (
    <>
      <div className="home">
        <div className="hero">
          <div className="title">
            The Java File <br /> Runner
          </div>
          <div className="desc">
            This project aims to provide a script files that will re-run a JAVA Program <br /> without any effort to re-run the program mannually.
          </div>
          <div className="btn_read_more">
            <Link to={"/About.js"} > Read More</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home