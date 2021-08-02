import './App.css';
function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <button
        style={{
          padding: '0.375rem 0.75rem',
          border: '1px solid black',
          borderRadius: '4px',
          backgroundColor: '#555555',
          color: '#fff',
          marginRight: '1rem',
        }}>
        +
      </button>
      <span style={{ marginRight: '1rem' }}>0</span>
      <button
        style={{
          padding: '0.375rem 0.75rem',
          border: '1px solid black',
          borderRadius: '4px',
          backgroundColor: '#555555',
          color: '#fff',
          marginRight: '1rem',
        }}>
        -
      </button>
      <button
        style={{
          padding: '0.375rem 0.75rem',
          border: '1px solid black',
          borderRadius: '4px',
          backgroundColor: '#555555',
          color: '#fff',
          marginRight: '1rem',
        }}>
        Reset
      </button>
    </div>
  );
}

export default App;
