import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Navigation() {
  return (
    <nav>
      <LinkButton to="/" end>
        Home
      </LinkButton>
      <LinkButton to="/login">LogIn</LinkButton>
    </nav>
  );
}

const LinkButton = styled(NavLink)`
  margin: 10px;
  text-decoration: none;
  background-color: #eee;
  color: #333;
  padding: 0.5rem;
  border-radius: 5px;
  &.active {
    background-color: hotpink;
  }
`;
