import React from 'react'

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="details">
        <div className="title">The Ultimate Script That You Need</div>
        <div className="about_project">
          This Project is made on purpose of learning typescript <br />
          along with this we needed a objective to made a web app that may solve one of our problem. <br /> After a little exploration we came-up to an idea to build a tool that will automate running of a Java File. 
          <br />
          In this project we have aimed to create a web app that is completely responsive <br /> and maintain its design through out multiple devices.
        </div>
        <a  href={"../src/assets/run.sh"} download={true} className="download_script">
          Download Script
        </a> 
      </div>

    </div>
  )
}

export default About