import styled from "styled-components";

const ButtonStyled = styled.button`
  color: #151f2b;
  background-color: #fe8a00;
  border-radius: 4px;
  width: 350px;
  height: 50px;
  font-size: 16px;
  transition: all 0.3s ease-in;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    transform: scale(1.008);
    transform: ${(props) => (props.disabled ? "none" : "scale(1.1)")};
    filter: ${(props) => (props.disabled ? "none" : "brightness(110%)")};
  }

  @media (max-width: 370px) {
    width: 100%;
  }
`;

export { ButtonStyled };
