/*import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav  className='navbr'   >
      <Link  to={"/"} >Home</Link>
      <Link  to={"/login"} >login</Link>
      <Link  to={"/register"} >register</Link>
      <Link to={"/profile"}>profile</Link>
      <Link >contact</Link>
</nav>

  )
}

export default Navbar*/
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavS() {
  const token=localStorage.getItem("token")
  return (
    <Navbar expand="lg"   style={{ backgroundColor:" #ddaa5d" }}>
      <Container fluid>
        <Navbar.Brand href="#">Maître Dattier</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Accueil</Nav.Link>
            
            <Nav.Link href="/Product">Produits</Nav.Link>

            <NavDropdown title="Link" idink="navbarScrollingDropdown">
           {!token ?  <NavDropdown.Item href="/login">Se connecter</NavDropdown.Item>:null}
             {token  ? <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>:null}
              {!token ? <NavDropdown.Item href="/Register">Registre</NavDropdown.Item>:null}
              <NavDropdown.Item href="contact">
                Contact
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/About">
              À propos de nous
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Plus
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavS;