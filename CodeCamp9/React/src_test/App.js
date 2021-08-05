import './App.css';

function App() {
  const friendList = ['John', 'Jame', 'Anna', 'Brion'];
  const list = friendList.map(element => <li>{element}</li>);

  return (
    //Lab8.1
    <ul>{list}</ul>
  );
}

export default App;
