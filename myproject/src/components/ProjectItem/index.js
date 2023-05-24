import './index.css'

const ProjectItem = props =>{
      const {projectList} = props
      const {imageURL,title,description} = projectList

      return(
            <li className="card-container">
                  <img src={imageURL} alt={title} className='custom-image'/>
                  <div className='project-content-container'> 
                        <h1 className='project-title'>{title}</h1>
                        <p className='project-disciption'>{description}</p>
                  </div>
                  

            </li>
      )
}
export default ProjectItem