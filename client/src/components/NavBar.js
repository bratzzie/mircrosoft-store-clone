import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../index";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router";
import { Button } from "react-bootstrap";
import { ADMIN_ROUTE, LOGIN_ROUTE } from "../utils/constants";

const NavBarComponent = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          {user.isAuth ? (
            <>
              <Button variant="light" onClick={() => history.push(ADMIN_ROUTE)}>
                Admin
              </Button>
              <Button variant="light" onClick={() => logOut()}>
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button variant="light" onClick={() => history.push(LOGIN_ROUTE)}>
                Sign In
              </Button>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
});

export default NavBarComponent;
