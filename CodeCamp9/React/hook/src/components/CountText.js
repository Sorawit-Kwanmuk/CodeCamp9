import { Component } from 'react';

class CountText extends Component {
  constructor(props) {
    super(props);
    console.log('CountText: Constrctor');
  }

  componentDidMount() {
    // setState() ใช้ได้ไม่มีปัญหา
    console.log('CountText: componentDidMount');
    // sideEffect จะทำงานในนี้เท่านั้น
    // network request eg. axios.get();
    // ทำงานเหมือน useEffect(() => {},[]); ทำงานแค่ครั้งแรกที่ render ครั้งเดียว
  }

  componentDidUpdate() {
    //if(){
    // setState() เกิด infinit re-render
    // }
    console.log('CountText: componentDidUpdate');
    //  ทำงานเหมือน useEffect(() => {}); ทำงานตอน render ตั้งแต่ครั้งที่ 2 ขึ้นไป
  }
  componentWillUnmount() {
    console.log('CountText: componentWillUnmount');
    // ทำงานเมื่อมีการลบ component ออกจาก DOM ทั้งหมด
  }
  render() {
    console.log('CountText: render');
    const {
      props: { count },
    } = this;
    //this คือ ตัวมันเอง เช่น this.props.count คือ CountText.props.count แต่เราจะมาใส่ชื่อตัวมันเองไม่ได้เลยใช้ this แทน
    // return <h2>{this.props.count}</h2>;
    return <h2>{count}</h2>;
  }
}

export default CountText;
