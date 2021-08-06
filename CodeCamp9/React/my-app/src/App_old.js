import './App.css';
import AddTodoForm from './component/AddTodoForm';
import Todo from './component/Todo';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: 'Travel' },
    { id: 2, name: 'shopping' },
  ]);
  const addTodo = newTodo => {
    const newItem = {
      id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
      //todos.length >  0 ? ไหม ถ้ามากกว่า0แสดงว่าไม่ใช่arrayเปล่า ให้ทำ todos[todos.length - 1].id + 1
      //todos[todos.length - 1].id + 1 คือการเข้าถึงตำแหน่งindex ตัวสุดท้าย และนำidตัวสุดท้ายใน array ไปบวก1 เป็นidตัวใหม่
      //:1 คือถ้าไม่เข้าเงื่อนไขด้านหน้า แสดงว่าเป็น arrayเปล่า ให้ค่าid =1
      name: newTodo,
    };
    const newTodos = [...todos, newItem];
    setTodos(newTodos);
  };
  return (
    <>
      <AddTodoForm addTodo={addTodo} />
      <ul
        style={{ listStyle: 'none', margin: 0, padding: 0, marginTop: '1rem' }}>
        {todos.map(item => (
          <Todo key={item.id} todo={item} todos='todos' />
        ))}
      </ul>
    </>
  );
}

export default App;
