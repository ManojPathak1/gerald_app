import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  margin: 5px 60px;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`;

const SearchInput = styled.input`
  border: 0px;
  outline: none;
  font-size: 17px;
`;

function Search() {
  return (
    <MainContainer>
      <div>
        <span>I</span>
        <SearchInput value="Rechercher"></SearchInput>
      </div>
      <div>Actions</div>
    </MainContainer>
  );
}

export default Search;