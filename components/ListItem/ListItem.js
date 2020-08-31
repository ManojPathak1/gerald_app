import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  padding: 10px;
  padding-bottom: 30px;
`;

const UserImage = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  img {
    height: 50px;
    width: 50px;
    border-radius: 5px;
  }
`;

const Name = styled.div`
  flex: 10;
  display: flex;
  flex-direction: column;
  .name {
    font-size: 13px;
    font-weight: bold;
    color: #777;
  }
  .subject {
    font-size: 18px;
    font-weight: 900;
  }
`;

const Time = styled.div`
  flex: 1.5;
  span {
    font-size: 13px;
    font-weight: bold;
    color: #777;
  }
`;

function ListItem({ listItem, handleList }) {
  const truncateText = listItem.description.substring(0, 60) + "...";
  return (
    <MainContainer key={listItem.id} onClick={() => handleList(listItem)}>
      <UserImage>
        <img src={listItem.img} />
      </UserImage>
      <Name>
        <span className="name">{listItem.name}</span>
        <span className="subject">{listItem.subject}</span>
        <span className="name">{truncateText}</span>
      </Name>
      <Time>
        <span>{listItem.time}</span>
      </Time>
    </MainContainer>
  );
}

export default ListItem;
