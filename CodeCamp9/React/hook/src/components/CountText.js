import { Component } from 'react';

class CountText extends Component {
  render() {
    const {
      props: { count },
    } = this;
    //this คือ ตัวมันเอง เช่น this.props.count คือ CountText.props.count แต่เราจะมาใส่ชื่อตัวมันเองไม่ได้เลยใช้ this แทน
    // return <h2>{this.props.count}</h2>;
    return <h2>{count}</h2>;
  }
}

export default CountText;
