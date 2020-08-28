import React from 'react';
import styled from 'styled-components';

const ListViewContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

`;

const ListContainer = styled.div`
  border: 1px green solid;
  flex: 1;
`;

function ListView() {
  return (
    <ListViewContainer>
      <div>
        <h1>Filter</h1>
      </div>
      <ListContainer>
      </ListContainer>
    </ListViewContainer>
  );
}

export default ListView;