import { useState } from "react";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateItem from "../components/modals/CreateItem";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [itemVisible, setItemVisible] = useState(false);

  return (
    <Container className="d-flex flex-column">
      <Button
        onClick={() => setTypeVisible(true)}
        variant={"outline-dark"}
        className="mt-4 p-2"
      >
        Add type
      </Button>
      <Button
        onClick={() => setBrandVisible(true)}
        variant={"outline-dark"}
        className="mt-4 p-2"
      >
        Add category
      </Button>
      <Button
        onClick={() => setItemVisible(true)}
        variant={"outline-dark"}
        className="mt-4 p-2"
      >
        Add application
      </Button>
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateItem show={itemVisible} onHide={() => setItemVisible(false)} />
    </Container>
  );
};

export default Admin;
