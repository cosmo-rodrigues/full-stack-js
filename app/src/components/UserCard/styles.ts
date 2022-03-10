import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-image: linear-gradient(to top, #e6f3fb, #fff);
  border: solid 2px #fff;
  border-radius: 8px;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.71);
  display: flex;
  justify-content: space-around;
  padding: 0.8rem 2rem;
  width: 100%;
  max-width: 550px;

  @media (min-width: 768px) {
    max-width: 400px;
  }
`;

export const UserInfoWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const UserHeader = styled.div``;

export const UserName = styled.h4``;

export const UserSubInfos = styled.div``;

export const UserId = styled.p``;

export const UserEmail = styled.p``;

export const UserPhone = styled.p``;

export const UserWebSite = styled.p``;

export const AvatarWrapper = styled.div``;

export const Avatar = styled.img`
  max-width: 100px;
`;
