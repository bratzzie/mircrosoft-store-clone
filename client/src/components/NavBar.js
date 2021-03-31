import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../index";
import Container from "react-bootstrap/Container";

const NavBarComponent = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          {user.isAuth ? (
            <>
              {" "}
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Admin</Nav.Link>
              <Nav.Link href="#pricing">Login</Nav.Link>
            </>
          ) : (
            <Nav.Link href="#home">Sign Up</Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
});

export default NavBarComponent;
