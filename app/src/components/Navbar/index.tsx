import { Container, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './styles';

export function Navbar() {
  return (
    <Container>
      <NavLink to='/'>
        <img src='/assets/talk_you.png' alt='TalkYou logo' width='150px' />
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/services'>Services</NavLink>
        <NavLink to='/contact-us'>Contact Us</NavLink>
        <NavLink to='/sign-up'>Sign Up</NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
      </NavBtn>
    </Container>
  );
}
