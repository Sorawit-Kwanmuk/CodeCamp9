import { useContext } from 'react';
import { CountContext } from '../contexts/CountContext';

function Button() {
  const context = useContext(CountContext);
  return (
    <>
      <button onClick={() => context.dispatch({ type: 'INCREMENT' })}>+</button>
      <input type='text' />
      <button onClick={() => context.dispatch({ type: 'STEP', payload: { step: 2 } })}>
        Step
      </button>
      <button onClick={() => context.dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => context.dispatch({ type: 'RESET' })}>Reset</button>
    </>
  );
}

export default Button;
