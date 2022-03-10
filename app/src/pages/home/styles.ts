import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  margin-left: auto;
  overflow-y: scroll;
  width: 50%;
  padding-right: 40px;
`;

export const UserCardWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  padding-top: 5%;

  @media (min-width: 900px) {
    .cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .cards {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
