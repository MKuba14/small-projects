import styled from "styled-components";

import { NavLink } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { MdCalculate } from "react-icons/md";
import { FaCloud } from "react-icons/fa";
import { TbPassword } from "react-icons/tb";

const StyledSidebar = styled.aside`
  background-color: var(--color-dark-red);
  border-left: 1px solid var(--color-light);
  padding: 6rem 1.3rem;
`;
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
  list-style: none;
`;
const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    font-size: 1.3rem;
    padding: 1rem 1.4rem;
    text-decoration: none;
    color: var(--color-light);
    transition: all 0.2s ease-out;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    background-color: var(--color-red);
    border-radius: 7px;
    border: 0.5px var(--color-light) solid;
    letter-spacing: 1.2px;
  }
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <nav>
        <NavList>
          <li>
            <StyledNavLink to="/">
              <ImHome />
              Home
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/calculator">
              <MdCalculate />
              Calculator
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/passwords">
              <TbPassword />
              Passwords
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/weather">
              <FaCloud />
              Weather
            </StyledNavLink>
          </li>
        </NavList>
      </nav>
    </StyledSidebar>
  );
}

export default Sidebar;
