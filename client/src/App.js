import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Context } from "./index";
import AppRouter from "./components/AppRouter";
import NavBarComponent from "./components/NavBar";
import { check } from "./connection/userAPI";
import { Container, Spinner } from "react-bootstrap";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      check()
        .then((data) => {
          user.setUser(true);
          user.setIsAuth(true);
        })
        .finally(() => setLoading(false));
    }, 1000);
  }, []);

  if (loading) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: window.innerHeight - 54 }}
      >
        <Spinner animation={"grow"} />
      </Container>
    );
  }
  return (
    <Router>
      <NavBarComponent />
      <AppRouter />
    </Router>
  );
});

export default App;
