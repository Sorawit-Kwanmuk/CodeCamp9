import { createContext, useReducer } from 'react';

const CountContext = createContext();

const INITIAL_COUNT = { count: 0 };
const countReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      // return { ...state, count: state.count > 0 ? state.count - 1 : 0 };//ไม่ดี เพราะมันจะเป็นการอัพเดท state โดยไม่จำเป็น
      return state.count > 0 ? { ...state, count: state.count - 1 } : state; //referance เดิม ถ้าไม่เปลี่ยนจะ return ค่า state เดิม
    case 'RESET':
      // return { ...state, count: state.count + action.payload.step };
      return { ...state, count: 0 };
    default:
      return state;
  }
};

function CountProvider(props) {
  const [state, dispatch] = useReducer(countReducer, INITIAL_COUNT);
  return (
    <CountContext.Provider value={{ state: state, dispatch: dispatch }}>
      {props.children}
    </CountContext.Provider>
  );
}
// function useCount() {
//   const context = useContext(CountContext);
//   if (context === undefined) {
//     throw new Error('useCount must be used within CountProvider');
//   }
//   return context;
// }

export { CountProvider, CountContext };
