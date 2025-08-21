import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Nav() {
  return (
    <NavStyle>
      <NavLink to="/">홈</NavLink>
      <NavLink to="/about">소개</NavLink>
      <NavLink to="/login">로그인</NavLink>
      <NavLink to="/design">스타일컴포넌트</NavLink>
    </NavStyle>
  );
}

//HTML 태그가 아닌것들은 괄호에!
const NavLink = styled(Link)`
  color: #333;
  margin-right: 10px;
  text-decoration: none;
  /*  밑줄이 없어짐 */
`;

const NavStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
