import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function CollapsibleNavbar() {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="dark"
      variant="dark"
      fixed="top"
      className="pt-2 pb-2"
    >
      <Container>
        <Navbar.Brand href="/">
          <div className="d-flex flex-row align-items-center">
            <Button
              className="rounded-circle fw-semibold"
              variant="outline-primary"
              style={{ width: '50px', height: '50px' }}
            >
              PB
            </Button>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link active={false} href="./#about">
              About me
            </Nav.Link>
            <Nav.Link active={false} href="./#education">
              Education
            </Nav.Link>
            <Nav.Link active={false} href="./#experience">
              Experience
            </Nav.Link>
            <Nav.Link active={false} href="./#projects">
              Projects
            </Nav.Link>
            <Nav.Link active={false} href="./#contact">
              Contact
            </Nav.Link>
          </Nav>
          <Button
            className="ms-md-2 mt-md-0 mt-2"
            variant="outline-primary"
            onClick={() => {
              window.open('/pdfs/PavaruthB_CV.pdf', '_blank');
            }}
          >
            Resume
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
