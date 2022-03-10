import styled from 'styled-components';

export const Container = styled.nav`
  background: ${({ theme }) => theme.colors.black_90};
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  width: 100%;
`;

export const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.white_100};
  font-size: 400;
`;
