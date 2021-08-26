import './App.css';
import { Component, useEffect } from 'react';
import CountText from './components/CountText';

// function App() {
//   // const [state, setState] = useState(0);
//   return (
//     <div>
//       <h1>Counter App</h1>
//       <h2>0</h2>
//       <button>+</button>
//       <button>-</button>
//       <button>Reset</button>
//     </div>
//   );
// }

// class A {
//   //property
//   name = 'John';
//   birthYear = 1998;
//   //method
//   sayHi() {
//     console.log(
//       'Hello. My name is ' + this.name + ' and I am ' + this.calcAge() + ' years old.'
//     );
//   }
//   calcAge() {
//     return new Date().getFullYear() - this.birthYear;
//   }
// }
// //instan of class objA สร้างมาจาก class A มี method และ property ทั้งหมดของ class A
// const objA = new A();
// objA.sayHi();

class App extends Component {
  // class ประกอบด้วย property และ method กี่ตัวก็ได้
  // App ไปสืบทอดทุกสิ่ง มาจาก class Component
  //#1 Declare state
  constructor(props) {
    super(props);
    //   this.state = {
    //     count: 0,
    //     error: '',
    //   };
    // this.handleClickReset = this.handleClickReset.bind(this); // fix lost this
    console.log('App: Constrctor');
  }
  //#2 ประกาศเป็น property ตัวนึง

  state = {
    count: 0,
    error: '',
    showCounter: true,
  };

  // handleClichReset () {
  //   this.setState({ count: 0 });
  // }; ถ้าไม่เขียนเป็น arrow function จะทำให้มันทำงานไม่ได้ เพราะมันไม่รู้จัก this หือก็คือเกิด lost this แก้โดยการไป bind(this) ใน constructor

  //#3 ประกาศเป็น method ตัวนึง
  handleClichIncrement = () => {
    //increse count by 1
    this.setState({ count: this.state.count + 1 }); // new state : {count:1,error:''}
    //จริงๆแล้วการเขียนแบบนี้มันไม่ดี เพราะมันอิงค่าจาก state ปัจจุบัน ถ้าใน function
    //มีการเรียก this.setState({ count: this.state.count + 1 }); อีกอันนึง count จะเพิ่มแค่1 ไม่ได้เพิ่ม2

    //setState ได้มาจาก class App ที่มีการสืบทอดทุกสิ่ง มาจาก class Component
    // this.setState(current => ({ count: current.count + 1 }));
    //แบบนี่คือวิธีที่ดี เพราะมันอิงค่าจากใน memmory ปัจจุบัน ถ้าเขียนเพิ่มอีกครั้ง มันก็ทำงานทั้งสองอัน
  };

  //this.setState({ count: this.state.count + 1 }); คือการเซต state โดยนำไป merge กับ state เดิม  state = {count: 0,error: '',};

  // handleClichIncrement(){}
  handleClichDecrement = () => {
    this.setState({
      count: this.state.count > 0 ? this.state.count - 1 : this.state.count,
    });
  };
  handleClichReset = () => {
    this.setState({ count: 0 });
  };

  componentDidUpdate() {
    console.log('App: componentDidUpdate');
    //  ทำงานเหมือน useEffect(() => {}); ทำงานตอน render ตั้งแต่ครั้งที่ 2 ขึ้นไป
  }

  render() {
    console.log('App: render');
    const {
      state: { count },
    } = this; // {state:, handleClichIncrement, handleClichDecrement, handleClichReset}
    return (
      <div style={{ padding: '4rem' }}>
        <h1>Counter App</h1>
        {/* <h2>{this.state.count}</h2> */}
        {this.state.showCounter && <CountText count={count} />}
        <button onClick={this.handleClichIncrement}>+</button>
        <button onClick={this.handleClichDecrement}>-</button>
        <button onClick={this.handleClichReset}>Reset</button>
        <button onClick={() => this.setState({ showCounter: !this.state.showCounter })}>
          Toggle
        </button>
      </div>
    );
  }
}
// instance object ของ class App มี property และ method ทั้งหมดของ class App
const app = new App();
app.render();
//เมื่อ new App() ถูกเรียกใช้งาน constructor จะทำงานทันที constructor(props) {
//   super(props);
//   this.state = {
//     count: 0,
//     error: '',
//   };
// } และทำงานแค่ครั้งแรกครั้งเดียว

export default App;
