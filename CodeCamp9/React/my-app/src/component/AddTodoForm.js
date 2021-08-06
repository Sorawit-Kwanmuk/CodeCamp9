import { useState } from 'react';
function AddTodoForm(props) {
  const [newTodo, setNewTodo] = useState('');
  const [error, setError] = useState('');
  const handleChangeNewTodo = e => {
    const value = e.target.value; //เก็บค่าที่พิมพ์เข้าไปในvalue
    if (value === '') {
      setError('Todo is require');
    } else {
      setError('');
    }
    setNewTodo(value);
  };
  const handleClickAdd = () => {
    if (newTodo === '') {
      setError('Todo is require');
    } else {
      setError('');
      props.addTodo(newTodo);
      setNewTodo('');
    }
  };
  return (
    <>
      <input
        type='text'
        placeholder='Enter new todo'
        value={newTodo}
        style={{ marginTop: '1rem' }}
        onChange={handleChangeNewTodo}
      />
      <button onClick={handleClickAdd}>Add</button>
      {error && (
        <p style={{ fontSize: '0.75rem', margin: 0, padding: 0, color: 'red' }}>
          {error}
        </p>
      )}
    </>
  );
}
export default AddTodoForm;
