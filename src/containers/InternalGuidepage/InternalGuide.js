import React from 'react'
import "./InternalGuide.css"
import ProjectContextProvider from '../../context/projectcontext'
import ProjectList from '../../components/verification/projectlist'

const InternalGuide = (props) => {
  return (
    <div>
      <ProjectContextProvider>
        <ProjectList />
      </ProjectContextProvider>
    </div>
  )
}

export default InternalGuide
