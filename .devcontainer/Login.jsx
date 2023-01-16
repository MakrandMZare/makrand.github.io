import styled from "styled-components";
import { mobile } from "../responsive";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div`
    margin: 0 auto;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    margin: 0 auto;
    justify-content:center
    width: 30%;
    padding: 20px;
    background-color: lightgrey;
  ${mobile({ width: "90vw" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  font-size: 12px;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 25px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="mobile or username" />
          <Input placeholder="password" />

          <Button>LOGIN</Button>
          <Link>DO NOT REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Login;
