import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  margin-left: 30px;
  margin-top: 40px;
`;

const ListContainer = styled.div`
  margin-top: 40px;
`;

const OptionsContainer = styled.div`
  font-size: 15px;
  display: flex;
  flex-direction: column;
`;

function LeftBar() {
  return (
    <MainContainer>
      <h3>I Outlook</h3>
      <ListContainer>
        <span>Dossiers I</span>
        <OptionsContainer>
          {[1, 2, 3, 4, 5, 6, 7].map(e => {
            return <span>List {e}</span>
          })}
        </OptionsContainer>
      </ListContainer>
    </MainContainer>
  );
}

export default LeftBar;