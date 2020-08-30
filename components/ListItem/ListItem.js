import React from 'react';
import styled from 'styled-components';

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

function ListItem() {
  return (
    <MainContainer>
      <UserImage>
        <img src="https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/medium/oapgW_Fp_400x400.jpg" />
      </UserImage>
      <Name>
        <span className="name">Dan Abramov</span>
        <span className="subject">Welcome to React and Redux</span>
        <span className="name">React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.</span>
      </Name>
      <Time>
        <span>8:56</span>
      </Time>
    </MainContainer>
  );
}

export default ListItem;