import styled from "styled-components";

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 16px;
  color: #cfcfcf;
  margin-right: auto;

  strong {
    font-weight: 800;
  }
`;

const Input = styled.input`
  background-color: #1e2733;
  height: 60px;
  color: #151f2b;
  border-radius: 4px;
  font-size: 16px;
  color: #fff;
  padding-left: 10px;

  &::placeholder {
    color: #cfcfcf;
  }
`;

export { Box, Title, Input, Main };
