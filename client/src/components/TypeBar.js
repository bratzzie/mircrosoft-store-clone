import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Form } from "react-bootstrap";
import { Context } from "../index";

const TypeBar = observer(() => {
  const { item } = useContext(Context);
  return (
    <Form.Group className="mr-2">
      <Form.Control as="select" size="lg">
        {item.types.map((type) => (
          <option
            style={{ cursor: "pointer" }}
            key={type.id}
            onClick={() => item.setSelectedType(type)}
          >
            {type.name}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
});

export default TypeBar;
