import styled from "styled-components";

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
`;

const Container = styled.div`
  width: 350px;

  @media (max-width: 370px) {
    width: 100%;
  }
`;

const GroupText = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    color: #fff;
    font-size: 16px;
  }

  strong {
    font-size: 12px;
    font-weight: 300;
    color: #cfcfcfb0;
  }
`;

const GroupHours = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: #fff;
    font-size: 28px;
  }

  strong {
    font-size: 16px;
    color: #fff;
  }
`;

const Text = styled.h1`
  color: #fff;
  font-size: 16px;
  margin-top: 30px;
`;

const GroupDays = styled.div`
  background: rgba(217, 217, 217, 0.05);
  border-radius: 4px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Day = styled.span`
  color: #fff;
`;

const Hour = styled.span`
  color: #fff;
  font-weight: bold;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export {
  GroupText,
  GroupHours,
  Box,
  Container,
  Text,
  GroupDays,
  Day,
  Hour,
  Content,
};
