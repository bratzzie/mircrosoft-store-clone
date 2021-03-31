import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Form } from "react-bootstrap";
import { Context } from "../index";

const BrandBar = observer(() => {
  const { item } = useContext(Context);
  return (
    <Form.Group>
      <Form.Control as="select" size="lg">
        {item.brands.map((brand) => (
          <option
            style={{ cursor: "pointer" }}
            key={brand.id}
            onClick={() => item.setSelectedBrand(brand)}
          >
            {brand.name}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
});
export default BrandBar;
