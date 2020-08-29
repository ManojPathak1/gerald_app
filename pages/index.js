import styled from 'styled-components';
import LeftBar from "../components/LeftBar/LeftBar";
import Search from "../components/Search/Search";
import ListView from "../components/ListView/ListView";
import DetailsView from "../components/DetailsView/DetailsView";

const MainContainer = styled.div`
  display: flex;
  border: 1px red solid;
  box-sizing: border-box;
  height: 100vh;
  align-items: center;
`;

const LeftSection = styled.div`
  flex: 1;
  height: 100%;
  border: 1px red solid;
`;

const RightSection = styled.div`
  flex: 5;
  border: 1px red solid;
  margin: 25px 0 25px 0;
  border: 1px pink solid;
  display: flex;
  flex-direction: column;
  height: 90%;
`;

const InnerContainer = styled.div`
  display: flex;
  border: 1px blue solid;
  flex: 1;
  height: 90%;
`;

const ListViewContainer =  styled.div`
  flex: 1;
  border: 1px blue solid;
  display: flex;
`;

const DetailsViewContainer =  styled.div`
  border: 3px green solid;
  flex: 3;
`;

const SearchContainer = styled.div`
  height: 10%;
`;

export default function Home() {
  return (
    <MainContainer>
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
          margin: 0;
        }
      `}</style>
    </MainContainer>
  );
}
