import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ActionItems = styled.div`
  height: 10%;
  border: 1px red solid;
`;

const Description = styled.div`
  height: 90%;
  overflow-y: auto;
`;

function DetailsView() {
  return (
    <MainContainer>
      <ActionItems>

      </ActionItems>
      <Description>
        <h1>Details</h1>
        <h1>Details</h1>
        <h1>Details</h1>
        <h1>Details</h1>
        <h1>Details</h1>
        <h1>Details</h1>
        <h1>Details</h1>
        <h1>Details</h1>
        <h1>Details</h1>
        <h1>Details</h1>
        <h1>Details</h1>
        <h1>Details</h1>
        <h1>Details</h1>
        <h1>Details</h1>
        <h1>Details</h1>
      </Description>
    </MainContainer>
  );
}

export default DetailsView;