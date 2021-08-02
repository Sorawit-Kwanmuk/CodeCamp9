import './App.css';
function App() {
  const handleClice = () => {
    alert('You clicked me!');
  };
  const handleSubmit = event => {
    // alert('Form is submitted!');
    event.preventDefault();
    console.log('Form is submitted!');
  };
  const handleSelect = () => {
    alert('You value has been change');
  };
  const handleClickButtonWithId = (id, event) => {
    alert(`You clicked button with id: ${id}`);
  };
  return (
    <div style={{ margin: '3rem' }}>
      <button onClick={handleClice}>Click</button>
      <button onClick={() => alert('Annonymous function arrow')}>
        Click Annonymous Click Annonymous
      </button>
      <button
        onClick={function () {
          alert('Anonymous function expression');
        }}>
        Click Function
      </button>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username : </label>
        {/* <input
          type='text'
          id='username'
          onChange={() => alert('input has been change')}
        />  */}
        <input
          type='text'
          id='username'
          onChange={event => console.log(event.target.value)}
        />
        <label htmlFor=''>Please Select : </label>
        <select name='' id='' onChange={handleSelect}>
          <option value=''>1</option>
          <option value=''>2</option>
        </select>
        <button>Submit</button>
      </form>
      <a
        href='https://www.google.co.th/'
        onClick={event => event.preventDefault()}>
        Google
      </a>
      <button onClick={() => handleClickButtonWithId(1, null)}>ID: 1</button>
      <button onClick={event => handleClickButtonWithId(2, event)}>
        ID: 2
      </button>
    </div>
  );
}

export default App;
