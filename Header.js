import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <div>

            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">K R E Y</Navbar.Brand>
                <Nav className=" class item-card" >
                    <Link to="/">Players</Link>
                    <Link to="/Team">Team</Link>
                    <Link to="/Login">Login</Link>
                    <Link to="/Registration">Registration</Link>

                </Nav>

            </Navbar>

        </div>
    );
}
export default Header;    