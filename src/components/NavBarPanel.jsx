import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBarPanel from './NavBarPanel';
import { Navbar, Container, Nav } from "react-bootstrap";


const NavBar = () => {
  const CartProducts = useSelector((state) => state.cart);

  return (
    <Navbar expand="lg" className="NavB fixed-header">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="text-white font-weight-bold"> 
          <span className="shopping">Shopping Cart</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="bg-light" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/products" className="text-white opt">
              Products
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/cart" className="text-white opt">
              My Cart ({CartProducts.length})
              <i className="fa-solid fa-cart-shopping"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;