import React,{useContext} from 'react';
import { ProjectContext } from '../../context/projectcontext';
import ProjectDetails from './projectdetails';

const ProjectList = () => {
    const {projects} = useContext(ProjectContext);
    return projects.length ? ( 
        <div className="project-list">
            <ul>
                {projects.map((project)=>{
                    return(
                        <ProjectDetails project={project} key={project.id} />
                    )
                })}
            </ul>
        </div>
     ):(
        <div className="empty">No projects submitted</div>
     );
}
 
export default ProjectList;