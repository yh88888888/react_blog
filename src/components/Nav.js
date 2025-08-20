import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <Link to="/">홈</Link>
            <Link to="/about">소개</Link>
            <Link to="/contac">로그인</Link>
        </div>
    );
}
