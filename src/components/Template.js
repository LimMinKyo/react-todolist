import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  padding-top: 20px;
  max-height: 100vh;
`;

const Title = styled.h2`
  width: 90vw;
  max-width: 480px;
  margin: 0 auto;
  padding-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.pointColor};
`;

const Children = styled.div``;

const Templete = ({ children, todosLength }) => {
  return (
    <Container>
      <Title>오늘의 할 일 ({todosLength})</Title>
      <Children>{children}</Children>
    </Container>
  );
};

export default Templete;
