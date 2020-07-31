import React from 'react'
import "./HOD.css"
import ProjectContextProvider from '../../context/projectcontext'
import ProjectList from '../../components/verification/projectlist'

const HOD = () => {
  return (
    <div>
      <ProjectContextProvider>
        <ProjectList />
      </ProjectContextProvider>
    </div>
  )
}

export default HOD
