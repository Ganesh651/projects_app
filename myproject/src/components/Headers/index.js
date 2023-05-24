import './index.css'

const Header = ()=>{
      return (
            <nav className='navbar-header'>
            <div className='nav-content'>
            <div className='navbar-logo'>GGR</div>
            <ul className='nav-menu'>
            <li>
                  <img src="https://assets.ccbp.in/frontend/react-js/projects-linkedin-img.png"
            alt="Linked In" className='nav-images'/>
            </li>  
            <li>
                  <img  src="https://assets.ccbp.in/frontend/react-js/projects-github-img.png"
            alt="Git Hub" className='nav-images'/>
            </li> 
            <li>
                  <img  src="https://assets.ccbp.in/frontend/react-js/projects-twitter-img.png"
            alt="Twitter" className='nav-images'/>
            </li>  
            
            </ul>
            </div>
            </nav>
      )
}
export default Header