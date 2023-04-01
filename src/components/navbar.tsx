import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function CollapsibleNavbar() {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" sticky='top' className='pt-4 pb-4'>
      <Container>
        <Navbar.Brand href="">PavaruthB</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link
              onClick={() => {
                console.log('clicked');
              }}
            >
              About me
            </Nav.Link>
            <Nav.Link>Experience</Nav.Link>
            <Nav.Link>Projects</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
          </Nav>
          <Button className='ms-md-2 mt-md-0 mt-2' variant="outline-primary">Resume</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
