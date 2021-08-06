function Todo(props) {
  // todo=item => {id:?, name:?} ทำให้สามรถใช้props.todo.idได้
  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
      <span style={{ marginRight: '1rem' }}>
        {props.todo.name}
      </span>
      <div>
        <button
          style={{ marginRight: '1rem' }}
          onClick={() => props.triggerEdit(props.todo.id)}>
          Edit
        </button>
        <button
          onClick={() => props.deleteTodo(props.todo.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default Todo;
