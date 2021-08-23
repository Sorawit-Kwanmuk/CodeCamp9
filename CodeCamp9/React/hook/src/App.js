import './App.css';
import { useReducer, useState } from 'react';
import Text from './components/Text';
import Button from './components/button';
import { CountProvider } from './contexts/CountContext';

//ทุกครั้งที่ click ที่อาจจะก่อให้เกิดการเปลี่ยนแปลง state จะถูกเรียกว่า action
// dispatch({ type: 'INCREMENT' });
// state : {count: 0}
// const INITIAL_STATE = { count: 0, error: '' }; //กำหนดหน้าตา state เริ่มต้น
// const CounterReducer = (state = 0, action) => {
// สิ่งที่ return ออกมา จะเป็นค่าขของ state ถัดไป หรือก็คือค่า setState
// action ประกอบด้วย + - Reset => INCREMENT DECREMENT RESET เพิ่ม action STEP
// if (action.type === 'INCREMENT') {
//   const cloneState = { ...state };
//   cloneState.count += 1;
//   // return { ...state, count: state.count + 1 };//ส่วนใหญ่เขียนแบบนี้
//   return cloneState;
// } else if (action.type === 'DECREMENT') {
//   if (state.count > 0) {
//     const cloneState = { ...state };
//     cloneState.count -= 1;
//     // return { ...state, count: state.count - 1 }
//     return cloneState;
//   }
// } else if (action.type === 'RESET') {
//   const cloneState = { ...state };
//   cloneState.count = 0;
//   // return { ...state, count: 0 };
//   return cloneState;
// } else {
//   //ดักการเรียกใช้ action.type นอกเหนือจากที่มี
//   return state;
// }
//ส่วนใหญ่เขียนเป็น switch case
// const CounterReducer = (state, action) => {
//   switch (action.type) {
//     case 'INCREMENT': {
//       const cloneState = { ...state };
//       cloneState.count += 1;
//       return cloneState;
//     }
//     case 'STEP': {
//       const cloneState = { ...state };
//       cloneState.count = state.count + action.payload.step;
//       // return {...state, count = state.count + action.payload.step;}
//       return cloneState;
//     }
//     case 'DECREMENT': {
//       if (state.count > 0) {
//         const cloneState = { ...state };
//         cloneState.count -= 1;
//         return cloneState;
//       }
//       return state;
//     }
//     case 'RESET': {
//       const cloneState = { ...state };
//       cloneState.count = 0;
//       return cloneState;
//     }

//     default:
//       return state;
//   }
// };
//payload คือค่าอื่นที่เราอยากส่งเข้าไปผ่านทาง dispatch
// function App() {
// const [state, dispatch] = useReducer(CounterReducer, INITIAL_STATE);
// const [step, setStep] = useState(0);
// return (
// <div style={{ padding: '4rem' }}>
// {
//   /* <input type='text' onChange={e => setStep(+e.target.value)} /> */
// }
// {
//   /* <h1>{state.count}</h1> */
// }
// {
//   /* <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
//       <button onClick={() => dispatch({ type: 'STEP', payload: { step } })}>Step</button>
//       <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
//       <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button> */
// }
// {
//   /* </div> */
// }
// );
// }
function App() {
  return (
    <CountProvider>
      <div style={{ padding: '4rem' }}>
        <Text />
        <Button />
      </div>
    </CountProvider>
  );
}

export default App;
