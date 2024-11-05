import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../assets/Images/Logo-LoL.png';

const NavBar= () => {


  return <>
      <Navbar  >
        <Container className='d-flex justify-content-start'>
          <Navbar.Brand> 
      <img src={Logo} alt="Logo" style={{ width: '70px', height: '70px' }}/>
      </Navbar.Brand>
          <Navbar.Brand >
            <Link className='link' to={'/HomePage'}>Home</Link>
            </Navbar.Brand>
            <Navbar.Brand >
            <Link className='link' to={'/ChampionsPage'}>Champions</Link>
            </Navbar.Brand>
          <Navbar.Brand>
            <Link className='link' to={'/LorePageBis'}> Lore 
          </Link></Navbar.Brand>
          <Navbar.Brand>
            <Link className='link' to={'/RelationsPage'}> Relations 
            </Link></Navbar.Brand>
            <Navbar.Brand>
            <Link className='link' to={'/items'}> Items
            </Link></Navbar.Brand>
          

        </Container>
      </Navbar>
    </>;
}

export default NavBar;