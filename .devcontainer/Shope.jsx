import styled from "styled-components";
import { shops } from "../data";
import ShopCards from "./ShopCards";
import { mobile } from "../responsive";


const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "5px", flexDirection: "column" })};
`;

const Shope = () => {
  return (
    <Container>
      {shops.map((item) => (
        <ShopCards item={item} />
      ))}
    </Container>
  );
};

export default Shope;
