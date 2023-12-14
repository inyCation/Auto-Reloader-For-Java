// import React from 'react'

const Help : React.FC = () => {
  return (
    <>
      <div className="help">
          <div className="sideImg">
            <img src={"../../src/assets/bash.jpg"} alt="" />
          </div>
          <div className="download_now">
            <a href={"../../src/assets/run.sh"} download={true}>Download</a>
          </div>
          
      </div>
    </>
  )
}

export default Help