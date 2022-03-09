import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({theme}) => theme.colors.white_100};
  display: flex;
  flex: 1;
  justify-content: center;
  height: 100vh;
  width: 100%;
`