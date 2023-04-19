import logo from './logo.svg';
import './App.css';
function Header(){
  return <header>
    <h1><a href="/">React_study</a></h1>
  </header>
}
function Nav(){
  return <nav>
    <ol>
      <li><a href="/read/1">메뉴1</a></li>
      <li><a href="/read/2">메뉴2</a></li>
      <li><a href="/read/3">메뉴3</a></li>          
    </ol>
  </nav>
}
function Article(){
  return <article>
    <h2>welcome React! 컴포넌트</h2>
    hello, 오건희
  </article>
}
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
