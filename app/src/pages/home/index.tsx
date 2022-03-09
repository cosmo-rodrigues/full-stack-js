// @ts-nocheck
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { Container } from './styles';

import { actions as fakerActions } from '../../store/modules/faker'


export function Home() {
  const [data, setData] = useState([])
  const dispatch = useDispatch()

  function fetchUsers() {
    dispatch(fakerActions.fetchAllUsersFaker(next => {
      return setData(next)
    }))
  }

  useEffect(() => {
    fetchUsers()
  }, [])
  
  console.log(data)
  return (
    <Container>
      <h1>Home</h1>
    </Container>
  )
}
