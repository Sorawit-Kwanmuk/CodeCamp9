import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

let i = 1;
function App() {
  const [count, setCount] = useState(0);
  const [language, setLanguage] = useState('THAI');
  const [users, setUsers] = useState([
    { id: uuidv4, name: 'John', username: 'J.Junior', password: 123456789 },
  ]);

  useEffect(
    () => {
      // setLanguage(currentLanguage => (currentLanguage === 'THAI' ? 'ENG' : 'THAI')); ห้าม setState ที่อยู่ใน dependency array ด้านในแบบนี้ เพราะทุกครั้งที่ stateมันเปลี่ยน
      //มันจะเรียก ใช้ function อีกครั้ง และจะเกิด infinitloop
      //ตัวแรกคือ callback effeck จะทำงานทุกครั้งที่ lender หน้าเว็บ หรือ state มีการเปลี่ยนนแปลง
      console.log(i); // เป็น side effect เพราะ console.log เป็นคำสั่ง global อยู่นอกเหนือจาก scope ของ App
      i++;
      document.title = language === 'THAI' ? 'สวัสดีรีแอค' : 'Hello React'; // เป็น side effect เช่นกัน
    },
    [count, language] //   //ตัวที่2 คือ array ไม่ต้องใส่ก็ได้ ค่าตัวแปรที่ใส่ในนี้จะเป็นตัวกำหนดให้ useEffect ทำงาน
    //ตัวอย่าง ถ้าใส่ count มันจะดูว่าเมื่อมีการ relenderค่า count เปลี่ยนแปลงไหม ถ้าไม่เปลี่ยน จะไม่มีการเรียกใช้งาน function ใน useEffect
    //ถ้าไม่ใส่ array เลย หมายความว่า ไม่ว่า state ตัวใหนเปลียน function ใน useEffect ก็จะทำงาน
    //ถ้าใส่ array เปล่า [] มันจำทำงาน function ใน useEffect แค่ครั้งแรกเท่านั้น
  );
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(current => [...current, ...response.data]);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      {/* Hello useEffect
      <button onClick={() => setCount(currentCount => currentCount + 1)}>Click</button>
      <button
        onClick={() =>
          setLanguage(currentLanguage => (currentLanguage === 'THAI' ? 'ENG' : 'THAI'))
        }>
        Change Language
      </button> */}
      <ul>
        {users.map(item => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>{item.username}</p>
            <p>{item.password}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
