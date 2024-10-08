import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar= () => {
  return <>
      <Navbar  >
        <Container className='d-flex justify-content-start'>
          <Navbar.Brand><Link to={'/'}>Home</Link></Navbar.Brand>
          <Navbar.Brand><Link to={'/LorePage'}> Lore </Link></Navbar.Brand>
          <Navbar.Brand><Link to={'/RelationsPage'}> Relations </Link></Navbar.Brand>

        </Container>
      </Navbar>
    </>;
}

export default NavBar;