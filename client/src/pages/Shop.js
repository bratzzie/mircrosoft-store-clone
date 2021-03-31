import { Col, Container, Row } from "react-bootstrap";
import BrandBar from "../components/BrandBar";
import ItemsList from "../components/ItemsList";
import TypeBar from "../components/TypeBar";

const Shop = () => {
  return (
    <Container>
      <h3 className="mt-3">The most popular apps</h3>
      <Row className="mt-3">
        <Col className="d-flex flex-row">
          <TypeBar />
          <BrandBar />
        </Col>
      </Row>
      <ItemsList />
    </Container>
  );
};

export default Shop;
