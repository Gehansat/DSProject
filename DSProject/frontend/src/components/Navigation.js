import React from 'react'
import { Navbar, Button, Nav, NavDropdown, Container } from 'react-bootstrap'
import './Navigation.css';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout/*, resetNotifications */} from "../features/userSlice";


function Navigation() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  /*const bellRef = useRef(null);
  const notificationRef = useRef(null);
  const [bellPos, setBellPos] = useState({});*/

  function handleLogout() {
    dispatch(logout());
  }


  return (
    <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
      <Container>

        <LinkContainer to="/">
            <Navbar.Brand > iHerb </Navbar.Brand>
        
        </LinkContainer>



        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Shop</Nav.Link>
            <Nav.Link href="#pricing">Brand</Nav.Link>
            <NavDropdown title="Help with" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>

            {/* if no user */}
            {!user && (
              <LinkContainer to="/login">
                <Nav.Link >Login</Nav.Link>
              </LinkContainer> 
            )}

            {/* if user */}

            { user && ( 
              <NavDropdown title={`${user.email}`} id="collasible-nav-dropdown">
                
              {user.isAdmin && (
                <>

                  <LinkContainer to="/admin">
                  <NavDropdown.Item >Dashboard</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/new-product">
                  <NavDropdown.Item >Create Product</NavDropdown.Item>
                  </LinkContainer>

                </>
              )}

                {!user.isAdmin && (
                <>

                  <LinkContainer to="/cart">
                  <NavDropdown.Item >Cart</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/orders">
                  <NavDropdown.Item >My Orders</NavDropdown.Item>
                  </LinkContainer>

                </>
              )}

              <NavDropdown.Divider />
              <Button variant="danger" onClick={handleLogout} className="logout-btn">
              Logout</Button>
              
            </NavDropdown>
            )}


            <Nav.Link eventKey={2} href="#memes">
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation;
