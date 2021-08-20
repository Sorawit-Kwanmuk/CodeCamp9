import { useEffect, useState } from 'react';

function Counter() {
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSecond(currentSecond => currentSecond + 1);
    }, 1000);
    return () => {
      clearInterval(id); //
    };
  }, []);

  return <div>{second}</div>;
}

export default Counter;
