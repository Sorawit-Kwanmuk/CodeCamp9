function Todo(props) {
  return (
    <li style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span style={{ marginRight: '1rem' }}>{props.todo.name}</span>
      <div>
        <button style={{ marginRight: '1rem' }}>Edit</button>
        <button>Delete</button>
      </div>
    </li>
  );
}

export default Todo;
