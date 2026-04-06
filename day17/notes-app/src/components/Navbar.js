import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
        <nav className="navbar">
            <Link to='/'>View Notes</Link> 
            <Link to='/add'>Add Notes</Link>
            </nav>
        </>
    )
}
export default Navbar; 