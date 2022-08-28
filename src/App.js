import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Technologies />
    </div>

  );
}

const Header = () => {
  return (
    <div>
      <a>Home</a>
      <a>News Feed</a>
      <a>Messages</a>
    </div>
  )
}

const Technologies = () => {
  return (
    <div className="App">
      <ul>
        <li>css</li>
        <li>html</li>
        <li>js</li>
        <li>react</li>
      </ul>
    </div>
  )
}

export default App;
