import {Link,useLocation} from 'react-router-dom';


interface SideNavProps {
  isMenuOpen: boolean;
}


const SideNav: React.FC<SideNavProps> = ({isMenuOpen}) => {
  const location = useLocation();
  

  const menu: string[] = [
    "Home",
    "About",
  ]
  const isActive = (path: string) => {
    return location.pathname === "/" + path;
  };

  return (
    <>
      <div className={`nav ${isMenuOpen ? 'nav_hidden' : ''}`}>
        <ul className="menu">
          {
            menu.map((e,id)=>(
              <li key={id} >
                {
                  <Link className={isActive(e) ? "active-nav-menu" : "inactive"}  to={"/"+e} >{e}</Link>
                }  
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default SideNav