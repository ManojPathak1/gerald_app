import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 40px;
  box-sizing: border-box;
`;

const ActionItems = styled.div`
  height: 15%;
`;

const Description = styled.div`
  height: 85%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DescriptionImage = styled.div``;

const Title = styled.div`
  span {
    font-size: 20px;
    font-weight: bold;
  }
`;

const DescriptionText = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  text-align: center;
  span {
    font-size: 20px;
    font-weight: bold;
    color: grey;
  }
`;

const UserName = styled.div`
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserImage = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    height: 50px;
    width: 50px;
    border-radius: 5px;
  }
  h3 {
    color: rgb(1, 119, 211);
  }
`;

const Actions = styled.div`
  display: flex;
`;

function SelectedView({ listItem }) {
  return (
    <MainContainer>
      <ActionItems>
        <UserName>
          <h3>Dan Abramov</h3>
          <Actions>
            <h3>A</h3>
            <h3>A</h3>
            <h3>A</h3>
            <h3>A</h3>
            <h3>A</h3>
            <h3>A</h3>
          </Actions>
        </UserName>
        <UserImage>
          <img src={listItem.img} />
          <h3>View in browser</h3>
        </UserImage>
      </ActionItems>
      <Description>
        <DescriptionImage>
          <img src={listItem.img} />
        </DescriptionImage>
        <Title>
          <h1>{listItem.name}</h1>
        </Title>
        <DescriptionText>
          <span>{listItem.description}</span>
        </DescriptionText>
      </Description>
    </MainContainer>
  );
}

export default SelectedView;
