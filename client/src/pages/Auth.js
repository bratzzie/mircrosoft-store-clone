import Container from "react-bootstrap/esm/Container";
import { Card, Form, Button, Row } from "react-bootstrap";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "../utils/constants";
import { login, registration } from "../connection/userAPI";
import { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const auth = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }

      user.setUser(user);
      user.setIsAuth(true);
      history.push(SHOP_ROUTE);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card className="p-5">
        <h2 className="m-auto">{isLogin ? "Sign In" : "Sign Up"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Enter your password..."
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
          <Button variant={"outline-success"} onClick={auth}>
            {isLogin ? "Login" : "Sign Up"}
          </Button>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
