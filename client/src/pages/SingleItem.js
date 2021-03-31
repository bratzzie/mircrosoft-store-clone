import { Button, Col } from "react-bootstrap";
import { Container, Image, Row } from "react-bootstrap";

const SingleItem = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center flex-column">
      <div className="card mb-3" style={{ width: "100vw" }}>
        <div className="d-flex row align-items-flex-start ">
          <div className="d-flex col-md-4 align-self-flex-start align-items-flex-start ">
            <Image
              className="align-self-flex-start"
              style={{ transform: "scale(0.6)", marginTop: -50 }}
              src={
                "https://aosa.org/wp-content/uploads/2019/04/image-placeholder-350x350.png"
              }
            />
          </div>
          <div className="d-flex flex-row align-items-flex-start justify-content-space-between col-md-8">
            <Row className="col-md-8">
              <div>
                <div className="card-body">
                  <h2 className="card-title">Card title</h2>
                  <p className="card-text">Card Text</p>
                  <p className="card-text">
                    <small className="text-muted">Card Text 2</small>
                  </p>
                </div>
              </div>
            </Row>
            <Row className="col-md-8">
              <div>
                <div className="card-body">
                  <h3>Free</h3>
                  <Button variant={"primary"} style={{ minWidth: 200 }}>
                    Get
                  </Button>
                </div>
              </div>
            </Row>
          </div>
        </div>
      </div>
      <Row className="d-flex flex-column m-3">
        <h2>Additional Information</h2>
        {/* {description.map((info) => (
          <Col key={info.id}><h4>{info.title}
            </h4> 
            <p>{info.description}</p></Col> */}
        {/* ))} */}
      </Row>
    </Container>
  );
};

export default SingleItem;
