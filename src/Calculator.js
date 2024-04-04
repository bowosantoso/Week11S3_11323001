import React, { Component } from 'react';
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {num1: 0 ,num2:0,result:''};
  }

handleNum1=(e)=>{
this.setState({num1:e.target.value});
}

handleNum2=(e)=>{
this.setState({num2:e.target.value});
}

add=()=>{
  let sum=parseInt(this.state.num1)+parseInt(this.state.num2);
  this.setState({result:sum});
}
substract=()=>{
  let sum=parseInt(this.state.num1)-parseInt(this.state.num2);
  this.setState({result:sum});
  }
multiplied=()=>{
  let sum=parseInt(this.state.num1)*parseInt(this.state.num2);
  this.setState({result:sum});
}
divided=()=>{
  let sum=parseInt(this.state.num1)/parseInt(this.state.num2);
  this.setState({result:sum});
}
  render() {

const element = (
 <div>
<table>
  <tr>
    <td><p>First number:</p><input type="number" name="num1" onChange={this.handleNum1} /> </td>
    <td><p>Second Number: </p><input type="number" name="num2" onChange={this.handleNum2} /> </td>
    <td><input type="button" value="+" onClick={this.add}/> </td>
    <td><input type="button" value="-" onClick={this.substract}/> </td>
    <td><input type="button" value="*" onClick={this.multiplied}/> </td>
    <td><input type="button" value="/" onClick={this.divided}/> </td>
  </tr>
  <tr>
    <td>Result is {this.state.result}</td>
  </tr>
</table>
 </div>
);
    return (
     element
    );
  }
}

export default Calculator;
