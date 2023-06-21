import React, { useRef, useState } from 'react'

const App = () => {
  const [renderer, SetRenderer] = useState(0);

  const countRef = useRef(0);
  let countVar = 0;

  const BtnRef = () =>{
    countRef.current = countRef.current + 1;
    console.log('ref : ', countRef.current);
  }

  const BtnVar = () =>{
    countVar = countVar + 1;
    console.log('var : ', countVar);
  }

  const BtnRender = () =>{
    SetRenderer(renderer + 1 );
  }

  const printResult = () =>{
    console.log(`ref : ${countRef.current}, var : ${countVar}`)
  }

  return (
    <div>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={BtnRef}>Ref Up</button>
      <button onClick={BtnVar}>Var Up</button>
      <button onClick={BtnRender}>render</button>
      <button onClick={printResult}>Ref Var 값 출력</button>
    </div>
  )
}

export default App