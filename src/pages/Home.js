import React, { useState } from 'react';

export default function Home() {
  console.log('랜더링');
  // 배열 구조 할당
  const [num, setNum] = useState(0);

  function add() {
    let newNum = num + 1;
    setNum(newNum);
  }

  function minus() {
    let newNum = num - 1;
    setNum(newNum);
  }

  return (
    <div>
      <div>상태관리연습</div>
      <div>{num}</div>
      <button onClick={add}>+1</button>
      <button onClick={minus}>-1</button>
      <hr />
    </div>
  );
}
