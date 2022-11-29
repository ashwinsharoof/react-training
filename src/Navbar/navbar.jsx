import {Link} from 'react-router-dom'
import './navbar.css'
function Navbar() {
    return (
        <>
            <ul>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/home">Home</Link></li>
            </ul>
        </>
    )
}

export default Navbar