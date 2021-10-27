import {Link} from "react-router-dom"


function Header(props) {
  return (
  <>
    
  <nav>
  <div className="nav-bg">
   <Link to="/" className="nav-big">Home</Link>
   <Link to="/applications" ClassName = "nav-small">Applications</Link>
   <Link to="/applicants" className="nav-big-link">Applicants</Link>
   </div>
    </nav>
  </>
  );
}

export default Header;
