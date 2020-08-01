import React from 'react'
import "./HOD.css"
import ProjectContextProvider from '../../context/projectcontext'
import ProjectList from '../../components/verification/projectlist'
import axios from "axios";

const SERVER_URL = 'http://127.0.0.1:8000';

const HOD = () => {
	// testing response 
	axios({
        method: 'get',
        url: SERVER_URL + '/user',
        withCredentials : true,
       }).then(function(res){console.log(res)}).catch(function(err){console.log(err)});

  return (
    <div>
      <ProjectContextProvider>
        <ProjectList />
      </ProjectContextProvider>
    </div>
  )
}

export default HOD
