import React from 'react'
import "./ProjectIncharge.css"
import ProjectContextProvider from '../../context/projectcontext'
import ProjectList from '../../components/verification/projectlist'

const ProjectIncharge = () => {
  return (
    <div>
      <ProjectContextProvider>
        <ProjectList />
      </ProjectContextProvider>
    </div>
  )
}

export default ProjectIncharge
