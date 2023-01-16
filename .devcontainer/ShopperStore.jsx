import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Shope from "../components/Shope";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;

const Wrapper = styled.div`
  display: grid;
  gap: 10px;
  justify-content: center;
`;

const ShopperStore = () => {
  return (
    <Container>
      <Navbar />
      <Title>Our Stores</Title>
      <Wrapper>
        <Shope />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default ShopperStore;
