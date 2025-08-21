import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const [count, setCount] = useState(10);
  const [number, setNumber] = useState(500);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('useEffect 실행됨');

    //cleanup
    return () => {
      console.log('userEffect 종료됨');
    };
  }, [count]);

  function addCount() {
    setCount(count + 1);
  }
  function addNumber() {
    setNumber(number + 1);
  }

  function moveLogin() {
    navigate('/login');
  }

  function moveInfo() {
    navigate('/info/10/good/5?page=2222');
  }

  return (
    <div>
      <h1>{count}</h1>
      <h1>{number}</h1>
      <button onClick={addCount}>카운트 증가</button>
      <button onClick={addNumber}>넘버 증가</button>
      <button onClick={moveLogin}>로그인페이지이동</button>
      <button onClick={moveInfo}>인포페이지이동</button>
    </div>
  );
}
