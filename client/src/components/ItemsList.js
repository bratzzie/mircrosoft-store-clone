import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Row } from "react-bootstrap";
import { Context } from "../index";
import Item from "./Item";

const ItemsList = observer(() => {
  const { item } = useContext(Context);
  return (
    <Row className="d-flex">
      {item.items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Row>
  );
});

export default ItemsList;
