import {
  Avatar,
  AvatarWrapper,
  Container,
  UserSubInfos,
  UserInfoWrapper,
  UserName,
  UserId,
  UserEmail,
  UserPhone,
  UserWebSite,
} from './styles';

export interface IUserProps {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export function UsersCard({ id, name, username, email, phone, website }: IUserProps) {
  return (
    <Container>
      <UserInfoWrapper>
        <UserId>
          #{id} - {username}
        </UserId>
        <UserName>{name}</UserName>
        <UserSubInfos>
          <UserPhone>{phone}</UserPhone>
          <UserEmail>{email}</UserEmail>
          <UserWebSite>{website}</UserWebSite>
        </UserSubInfos>
      </UserInfoWrapper>
      <AvatarWrapper>
        <Avatar src='/assets/user_avatar.png' />
      </AvatarWrapper>
    </Container>
  );
}
