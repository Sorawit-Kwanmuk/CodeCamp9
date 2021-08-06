import { useState } from 'react';
function EditTodoForm(props) {
  //edittingItem => {id:?, name:?}
  const [todoValue, setTodoValue] = useState(props.editingItem.name);
  const [error, setError] = useState(null);
  const handleChangeTodo = event => {
    if (event.target.value === '') {
      setError('Todo is required');
    } else {
      setTodoValue('');
    }
    setTodoValue(event.target.value);
  };
  const handleClickSave = () => {
    if (todoValue === '') setError('Todo is required');
    else {
      setError('');
      props.editTodo(props.editingItem.id, todoValue);
    }
  };
  return (
    <div style={{ marginTop: '1rem' }}>
      <input type='text' value={todoValue} onChange={handleChangeTodo} />
      <button onClick={handleClickSave}>Save</button>
      <button onClick={props.cancelEditForm}>Cancel</button>
      {error && (
        <p style={{ fontSize: '0.75rem', margin: 0, padding: 0, color: 'red' }}>
          {error}
        </p>
      )}
    </div>
  );
}
export default EditTodoForm;
