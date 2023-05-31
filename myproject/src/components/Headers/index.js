import './index.css'

const Header = ()=>{
      return (
            <nav className='navbar-header'>
            <div className='nav-content'>
            <div className='navbar-logo'>GGR</div>
            <ul className='nav-menu'>
            <li>
            <a href="https://www.linkedin.com/in/ganesh-gajarla/" rel="noreferrer"  target="_blank">
                  <img src="https://assets.ccbp.in/frontend/react-js/projects-linkedin-img.png" alt="Linked In" className='nav-images'/>
            </a>
            </li>  
            <li>
            <a href="https://github.com/Ganesh651" rel="noreferrer"  target="_blank">
                  <img  src="https://assets.ccbp.in/frontend/react-js/projects-github-img.png" alt="Git Hub" className='nav-images'/>
            </a>
            </li> 
            <li>
                  <img alt="Twitter" className='nav-images' src="https://assets.ccbp.in/frontend/react-js/projects-twitter-img.png" />
            </li>  
            
            </ul>
            </div>
            </nav>
      )
}
export default Header