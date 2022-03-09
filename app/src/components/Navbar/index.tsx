import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './styles';

export function Navbar() {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <p>Logo</p>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about'>
            About
          </NavLink>
          <NavLink to='/services'>
            Services
          </NavLink>
          <NavLink to='/contact-us'>
            Contact Us
          </NavLink>
          <NavLink to='/sign-up'>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
