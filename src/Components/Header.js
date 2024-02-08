import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi'; 

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" style={{ padding: '10px' }}>
      <Navbar.Brand className="text-light">Book My Seat</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar">
        <BiMenu />
      </Navbar.Toggle>
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
