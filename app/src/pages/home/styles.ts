import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.red_30};
`