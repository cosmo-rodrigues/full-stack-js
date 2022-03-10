// @ts-nocheck
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from './styles';

import { actions as fakerActions } from '../../store/modules/faker';

import { UsersCard, IUserProps } from '../../components/UserCard';

export function Home() {
  const [data, setData] = useState<IUserProps>([]);
  const dispatch = useDispatch();

  function fetchUsers() {
    dispatch(
      fakerActions.fetchAllUsersFaker((next) => {
        return setData(next);
      })
    );
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Container>
      <h1>Home</h1>
      <>
        {data.map((user: IUserProps) => (
          <UsersCard
            email={user.email}
            id={user.id}
            name={user.name}
            phone={user.phone}
            username={user.username}
            website={user.website}
          />
        ))}
      </>
    </Container>
  );
}
