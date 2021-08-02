import './App.css';
function App() {
  return (
    <div>
      <div className='header'>
        <button className='btn'></button>
      </div>
      <div className='cintainer'>
        <div className='card active'>
          <h1>Player 1</h1>
          <p className='player-score'>0</p>
        </div>
        <div className='card'>
          <div className='row'>
            <button className='btn btn-danger btn-fw'>Row</button>
            <button className='btn btn-success btn-fw'>Keep</button>
          </div>
          <div className='row'>
            <div className='dice-score'>0</div>
          </div>
          <div className='row'>
            <p className='round-score'>Round Score: 0</p>
          </div>
        </div>
        <div className='card'>
          <h1>Player 2</h1>
          <p className='player-score'>0</p>
        </div>
      </div>
    </div>
  );
}

export default App;
