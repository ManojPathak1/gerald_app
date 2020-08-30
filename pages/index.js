import Head from 'next/head';
import styled from 'styled-components';
import LeftBar from "../components/LeftBar/LeftBar";
import Search from "../components/Search/Search";
import ListView from "../components/ListView/ListView";
import DetailsView from "../components/DetailsView/DetailsView";

const MainContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  align-items: center;
`;

const LeftSection = styled.div`
  flex: 1;
  height: 100%;
  color: white;
`;

const RightSection = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  height: 96%;
  margin: 0 20px;
  background-color: white;
  border-radius: 50px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex: 1;
  height: 90%;
`;

const ListViewContainer =  styled.div`
  flex: 2;
  display: flex;
`;

const DetailsViewContainer =  styled.div`
  flex: 5;
`;

const SearchContainer = styled.div`
  height: 8%;
`;

export default function Home() {
  return (
    <MainContainer>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2&display=swap" rel="stylesheet" />
      </Head>
      <LeftSection>
        <LeftBar />
      </LeftSection>
      <RightSection>
        <SearchContainer>
          <Search />
        </SearchContainer>
        <InnerContainer>
          <ListViewContainer>
            <ListView />
          </ListViewContainer>
          <DetailsViewContainer>
            <DetailsView />
          </DetailsViewContainer>
        </InnerContainer>
      </RightSection>
      <style jsx global>{`
        body {
          font-family: 'Baloo Tamma 2', cursive;
          margin: 0;
          background-color: rgb(1,119,211);
        }
      `}</style>
    </MainContainer>
  );
}
