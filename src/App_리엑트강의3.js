import React, { useState, useEffect } from 'react'

const App = () => {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  }

  const handleInputChange = (e) => {
    setName(e.target.value);
  }

  // 렌더링마다 매번 실행 됌
  useEffect(() => {
    console.log('렌더링');
  });

  // 마운트 + count가 변경될때만 실행
  useEffect(() => {
    console.log('count 변화');
  }, [count]);

  // 마운트 + name이 변경될 때만 실행
  useEffect(() => {
    console.log('name 변화');
  }, [name]);

  // 첫 렌더링만 실행
  useEffect(() => {
    console.log('마운팅');
  }, []);

  return (
    <div>
      <div className='box1'>
        <button onClick={handleCountUpdate}>Update</button>
        <span>count: {count}</span>
      </div>
      <div className='box2'>
        <input type="text" value={name} onChange={handleInputChange}/>
        <span>name: {name}</span>
      </div>
    </div>
  )
}

export default App