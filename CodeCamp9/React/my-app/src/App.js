import React, { useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([
    { id: 1, task: 'Job1', status: 'todo' },
    { id: 2, task: 'Job2', status: 'todo' },
    { id: 3, task: 'Job3', status: 'todo' },
    { id: 4, task: 'Job4', status: 'todo' },
    { id: 5, task: 'Job5', status: 'doing' },
    { id: 6, task: 'Task1', status: 'todo' },
    { id: 7, task: 'Task2', status: 'todo' },
    { id: 8, task: 'Task3', status: 'doing' },
    { id: 9, task: 'Task4', status: 'doing' },
    { id: 10, task: 'Task5', status: 'done' },
  ]);
  const [in1, setIn1] = useState('');

  const hdlIn1Change = e => {
    setIn1(e.target.value);
  };

  const hdlAdd = () => {
    let newId = list[list.length - 1].id + 1;
    const newList = [...list];
    let newTask = { id: newId, task: in1, status: 'todo' };
    newList.push(newTask);
    setList(newList);
  };

  const deleteLast = e => {
    const newList = [...list];
    newList.pop();
    setList(newList);
  };

  const hdlDelete = del_id => {
    console.log(del_id);
    const newList = [...list];
    let idx = newList.findIndex(x => x.id === del_id);
    console.log(idx);
    newList.splice(idx, 1);
    setList(newList);
  };

  return (
    <div className='App'>
      <h3>List all Jobs</h3>
      <input onChange={hdlIn1Change} value={in1} />
      <button onClick={hdlAdd}>Add</button>
      <ol>
        {list.map(x => (
          <li key={x.id}>
            ID : {x.id} , Task : {x.task}
            <button onClick={() => hdlDelete(x.id)}>X</button>
          </li>
        ))}
      </ol>
      <button onClick={deleteLast}>delete last one</button>
    </div>
  );
}

export default App;
