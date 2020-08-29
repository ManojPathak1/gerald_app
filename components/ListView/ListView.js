import React from 'react';
import styled from 'styled-components';

const ListViewContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const ListContainer = styled.div`
  border: 3px green solid;
  flex-grow: 1;
  flex-basis: 0;
  overflow: auto;
`;

function ListView() {
  return (
    <ListViewContainer>
      <div>
        <h1>Filter</h1>
      </div>
      <ListContainer>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
      </ListContainer>
    </ListViewContainer>
  );
}

export default ListView;