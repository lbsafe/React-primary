import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(1);
  const renderCount = useRef(1);

  useEffect(()=>{
    renderCount.current = renderCount.current + 1;
    console.log('렌더링 수 : ', renderCount.current);
  });

  return (
    <div>
      <p>count {count}</p>
      <button onClick={() => setCount(count + 1)}>값올리기</button>
    </div>
  )
}

export default App