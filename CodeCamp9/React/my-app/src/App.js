import './App.css';
import AddTodoForm from './component/AddTodoForm';
import Todo from './component/Todo';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import EditTodoForm from './component/EditTodoForm';
import SearchForm from './component/SearchForm';

function App() {
  const [todos, setTodos] = useState([
    { id: uuidv4(), name: 'Travel' },
    { id: uuidv4(), name: 'shopping' },
    { id: uuidv4(), name: 'Watching a movie' },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState({});
  const [filterText, setFilterText] = useState('');

  const searchTodo = searchText => {
    setFilterText(searchText);
  };

  const clearSearch = () => {
    setFilterText('');
  };

  const showTodo = todos.filter(item =>
    item.name.toLocaleLowerCase().includes(filterText.toLowerCase())
  );

  const addTodo = newTodo => {
    const newItem = {
      // id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
      //todos.length >  0 ? ไหม ถ้ามากกว่า0แสดงว่าไม่ใช่arrayเปล่า ให้ทำ todos[todos.length - 1].id + 1
      //todos[todos.length - 1].id + 1 คือการเข้าถึงตำแหน่งindex ตัวสุดท้าย และนำidตัวสุดท้ายใน array ไปบวก1 เป็นidตัวใหม่
      //:1 คือถ้าไม่เข้าเงื่อนไขด้านหน้า แสดงว่าเป็น arrayเปล่า ให้ค่าid =1
      id: uuidv4(),
      name: newTodo,
    };
    const newTodos = [...todos, newItem];
    setTodos(newTodos);
  };

  const editTodo = (id, newName) => {
    //newName คือค่าtext ที่จะแสดงบนป้ายการแก้ไข
    const idx = todos.findIndex(item => item.id === id);
    const newTodos = [...todos];
    newTodos[idx].name = newName;
    setTodos(newTodos);
    setIsEditing(false);
  };

  const deleteTodo = id => {
    //use findIndex
    const idx = todos.findIndex(item => item.id === id);
    console.log(idx);
    const newTodos = [...todos];
    newTodos.splice(idx, 1);
    // splice(เริ่มต้นตำแหน่งที่,จำนวนที่จะลบ,ค่าที่จะใส่แทน);
    setTodos(newTodos);
  };

  const triggerEdit = id => {
    setIsEditing(true);
    const idx = todos.findIndex(item => item.id === id);
    setEditingItem(todos[idx]);
  };

  // isEditing && <EditTodoForm />;ถ้าisEditing มีค่าเป็นfalse ไม่ต้องเรียกใช้ EditTodoForm
  const cancelEditForm = () => {
    setIsEditing(false);
  };
  return (
    <div style={{ marginLeft: 10, marginTop: 10 }}>
      <SearchForm searchTodo={searchTodo} clearSearch={clearSearch} />
      {/* <AddTodoForm addTodo={addTodo} />
      {isEditing && (
        <EditTodoForm
        cancelEditForm={cancelEditForm}
        editingItem={editingItem}
        />
      )} */}
      {isEditing === true ? (
        <EditTodoForm
          editTodo={editTodo}
          cancelEditForm={cancelEditForm}
          editingItem={editingItem}
        />
      ) : (
        <AddTodoForm addTodo={addTodo} />
      )}
      <ul
        style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          marginTop: '1rem',
        }}>
        {showTodo.map(item => (
          <Todo
            key={item.id}
            todo={item}
            deleteTodo={deleteTodo}
            triggerEdit={triggerEdit}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
