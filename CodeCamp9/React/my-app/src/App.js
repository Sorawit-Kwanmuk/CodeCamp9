import './App.css';
import React, { useState } from 'react';
function App() {
  // const result = useState('Hello React!!!!'); //การกำหนดค่าเริ่มต้นของstate
  // const state = result[0];
  // const update = result[1];
  //shoter version but not good
  // const [state, update] = useState('Hello React!!!!');
  // const [state1, update1] = useState('Hello React!!!!');
  // const [state2, update2] = useState('Hello React!!!!');
  //shot and goode version const [???,set???] = useState('Hello React!!!!');
  // const [message, setMessage] = useState('Hello React');

  //   const handleClick = () => {
  //     setMessage('You clicked a button');
  //   };
  //   return (
  //     <div>
  //       <h1>{message}</h1>
  //       <button onClick={handleClick}>Click to change Text</button>
  //       <button onClick={() => setMessage('Tou Clicked Annonymous')}>
  //         Click to change Text Annonymous
  //       </button>
  //     </div>
  //   );

  // const [count, setCount] = useState(0);
  // const handleClickAdd = () => {
  //   // setCount(count + 1);
  //   //recommend use useCallback
  //   setCount(currentCount => currentCount + 1);
  // };
  // const handleClickSubtract = () => {
  //   // setCount(count - 1);
  //   setCount(currentCount => currentCount - 1);
  // };
  // const handleClickReset = () => {
  //   setCount(0);
  // };

  // return (
  //   <div className='container'>
  //     <button onClick={handleClickAdd}>+</button>
  //     <span>{count}</span>
  //     <button onClick={handleClickSubtract}>-</button>
  //     <button onClick={handleClickReset}>Reset</button>
  //   </div>
  // );

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [email, setEmail] = useState('');
  // const [birthDate, setBirthDate] = useState('');

  const [user, setUser] = useState({
    username: '',
    password: '',
    email: '',
    birthDate: '',
  });
}

export default App;
