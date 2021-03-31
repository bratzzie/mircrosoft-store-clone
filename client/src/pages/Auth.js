import Container from "react-bootstrap/esm/Container";
import { Card, Form, Button, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/constants";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card className="p-5">
        <h2 className="m-auto">{isLogin ? "Sign In" : "Sign Up"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Enter your email..." />
          <Form.Control className="mt-3" placeholder="Enter your password..." />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? (
              <div>
                New?
                <NavLink to={REGISTRATION_ROUTE}> Sign up here!</NavLink>
              </div>
            ) : (
              <div>
                Already have an account?
                <NavLink to={LOGIN_ROUTE}> Sign in here!</NavLink>
              </div>
            )}
          </Row>
          <Button variant={"outline-success"}>
            {isLogin ? "Login" : "Sign Up"}
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;