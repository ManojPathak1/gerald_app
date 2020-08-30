import React from 'react';
import styled from 'styled-components';
import ListItem from '../ListItem/ListItem';

const ListViewContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: 20px;
`;

const ListContainer = styled.div`
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
        {[1,2,3,4,5,6,7,8,9,10,11,12,13].map(e => (
          <ListItem />
        ))}
      </ListContainer>
    </ListViewContainer>
  );
}

export default ListView;