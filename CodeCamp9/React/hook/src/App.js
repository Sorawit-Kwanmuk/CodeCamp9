import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Product from './pages/Product';
import Login from './pages/Login';
import { useState } from 'react';

// '/' render Home
// '/Contact' render ContactUs
// '/Product' render Product
//มันจะหาจาก path='/Contact'  จากคำที่เหมือนกัน เช่น ถึงจะพิมพ์ path='/Contactrtgherthrth' มันก็จะไปที่หน้า ContactUs อยู่ดี
//ดังนั้น ถ้าให้  path='/' อยู่บนสุด ไม่ว่าจะพิมพ์อะไรหลัง / มันก็จะไปที่หน้า home จึงต้องนำ  path='/' ไว้ที่ด้านล่างสุด
//exact path='/' คิอต้องครงตัวอักษรถึงจะไปที่หน้านั้นได้
function App() {
  // const [state, setState] = useState(0);
  return (
    <div style={{ padding: '4rem' }}>
      <BrowserRouter>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/Contact'>ContactUs</Link>
          </li>
          <li>
            <Link to='/Product'>Product</Link>
          </li>
          <li>
            <Link to='/Login'>Login</Link>
          </li>
        </ul>
        <Switch>
          {/* <Route exact path='/' component={Home} /> */}
          <Route path='/Contact' component={ContactUs} />
          {/* <Route path='/Contact' render={() => <ContactUs state={state} />} /> */}
          {/*isExact จะมีค่าเป็นจริงเมื่อ ทุกตัวเหมือนกันทั้งพิมพ์เล็กพิมพ์ใหญ่*/}
          <Route path='/Product/:id' component={Product} />
          {/* /product/4 = id is 4 */}
          <Route path='/login' component={Login} />
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
