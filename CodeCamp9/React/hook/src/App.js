import './App.css';
import { Component } from 'react';
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
  // App ไปสืบทอดทุกสิ่ง มาจาก class Component
  //#1 Declare state
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: 0,
  //     error: '',
  //   };
  // }
  //#2 ประกาศเป็น property ตัวนึง
  state = {
    count: 0,
    error: '',
  };

  handleClichIncrement = () => {
    //increse count by 1
    this.setState({ count: this.state.count + 1 }); // new state : {count:1,error:''}
  };
  // handleClichIncrement(){}
  handleClichDecrement = () => {
    this.setState({
      count: this.state.count > 0 ? this.state.count - 1 : this.state.count,
    });
  };
  handleClichReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    const {
      state: { count },
    } = this; // {state:, handleClichIncrement, handleClichDecrement, handleClichReset}
    return (
      <div style={{ padding: '4rem' }}>
        <h1>Counter App</h1>
        {/* <h2>{this.state.count}</h2> */}
        <CountText count={count} />
        <button onClick={this.handleClichIncrement}>+</button>
        <button onClick={this.handleClichDecrement}>-</button>
        <button onClick={this.handleClichReset}>Reset</button>
      </div>
    );
  }
}

const app = new App();
app.render();

export default App;
