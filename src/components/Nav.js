//------------------IMPORTS----------------
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
import AuthState from './AuthState';
import { userNavigate, useParams } from 'react-router-dom';


export default function NavbarScroll() {

    const [authUser, setAuthUser] = useState('')

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
          if (user) {
              setAuthUser(user)
              // console.log(user)
              const uid = user.uid;
              // ...
          } else {
            setAuthUser('')
          }  
      }, [authUser])
    })

    return (
        <Navbar expand="lg" className="tertiary-color">
          <Container fluid>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href='/plantsearch'>Plant Search</Nav.Link>
                { authUser? 
                  <div>
                    <Nav.Link href='/user/:userId'>Profile</Nav.Link>
                    <AuthState/>
                  </div>              
                : 
                  <>
                    <Nav.Link href="/signup">Sign Up</Nav.Link>
                    <Nav.Link href="/signin">Sign In</Nav.Link>              
                  </>
                }
                {/* <Nav.Link href='/plantdata'>Plant Data</Nav.Link> */}
                
                {/* <NavDropdown title="Link" className='tertiary-color'id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}
                {/* <Nav.Link href="#" disabled>
                  Link
                </Nav.Link> */}
              </Nav>
              {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );

}