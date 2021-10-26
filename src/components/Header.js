import {Link} from "react-router-dom"


function Header(props) {
  return (
    <nav className="nav">
     
        <div>Eze Way Trucking</div>
   <div className="NavLinks">
   <Link to="/">Home</Link>
   <Link to="/applications">Applications</Link>
   <Link to="/applicants">Applicants</Link>
   </div>
    </nav>
  );
}

export default Header;
