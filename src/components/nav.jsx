import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';

import { Link } from 'react-router-dom';

import Git from '../img/github.png';
import Instagram from '../img/instagram.png';
import Linkedin from '../img/linkedin.png';

function OffcanvasExample() {

  const [idioma, setIdioma] = useState("Idioma");

  const portugues = () => {
    setIdioma("Idioma");
  }
  const ingles = () => {
    setIdioma("Language");
  }

  return (
    <>
        <Navbar expand= "md"className="mb-3">
          <Container fluid>
            <Navbar.Brand><Link onClick={portugues} style={{color: "white", textDecoration: "none"}} to="/">João Paulo</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas style={{background: "#031634"}}
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title style={{color: "white"}} id={`offcanvasNavbarLabel-expand-md`}>
                  João Paulo
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href = "https://github.com/JoaoPauloSvm" target= "_blank"><img src={Git} alt="Logo GitHub" /></Nav.Link>
                  <Nav.Link href = "https://www.instagram.com/joaopaulosvm/" target= "_blank"><img src={Instagram} alt="Logo Instagram" /></Nav.Link>
                  <Nav.Link href = "https://www.linkedin.com/in/jo%C3%A3o-paulo-svm-3881741b6/" target= "_blank"><img src={Linkedin} alt="Logo Linkedin" /></Nav.Link>
                  <NavDropdown style={{color: "white"}}
                    title={idioma}
                    id={`offcanvasNavbarDropdown-expand-md`}
                  >
                    <NavDropdown.Item><Link to="/pt" onClick={portugues} style={styles.Link}>Português</Link></NavDropdown.Item>
                    <NavDropdown.Item>
                    <Link to="/eng" onClick={ingles} style={styles.Link}>English</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

const styles = {
    Link: {
        color: "black",
        textDecoration: "none"
    }
}
export default OffcanvasExample;