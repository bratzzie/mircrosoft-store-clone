import { Card, Col, Image } from "react-bootstrap";
import { useHistory } from "react-router";
import star from "../assets/star.png";
import { ITEM_ROUTE } from "../utils/constants";

const Item = ({ item }) => {
  const history = useHistory();
  return (
    <Col
      md={3}
      className="mt-3"
      onClick={() => history.push(ITEM_ROUTE + "/" + item.id)}
    >
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Image width={150} height={150} src={item.img} />
        <div className="mt-1 d-flex justify-content-between align-items-center">
          <h4>{item.name}</h4>
          <div className="d-flex align-items-center">
            <Image width={12} height={12} src={star} />

            <div className="text-black-50" style={{ fontSize: "small" }}>
              {item.rating}
            </div>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default Item;
