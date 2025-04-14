import "./WorkCardStyles.css"
import WorkCard from "./WorkCard"
import WorkCradData from "./WorkCradData"
import React from 'react'

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCradData.map((Val,ind) =>{
            return(
                <WorkCard
                key={ind}
                imgsrc={Val.imgsrc}
                title={Val.title}
                text={Val.text}
                view={Val.view}
                />
            )
        })}
      </div>
    </div>
  )
}

export default Work
