import {Link,useLocation} from 'react-router-dom';






const SideNav: React.FC = () => {
  const location = useLocation();
  

  const menu: string[] = [
    "Home",
    "Recommendation",
    "Explore",
    "Help",
    "About",
  ]
  const isActive = (path: string) => {
    return location.pathname === "/" + path;
  };

  return (
    <>
      <div className='nav'>
        <ul className='menu'>
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