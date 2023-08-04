import ReactDOM from 'https://esm.sh/react-dom@18.2.0';
import React from 'https://esm.sh/react@18.2.0';
const numberkeys = ["AC", "7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."];
const calckeys = ["+", "-", "X", "/", "="];
const numberids = ["clear", "seven", "eight", "nine", "four", "five", "six", "one", "two", "three", "zero", "decimal"];
const calcids = ["add", "substract", "multiply", "divide", "equals"];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      result: 0,
      display: 0,
      operator: "" };

    this.numberHandler = this.numberHandler.bind(this);
    this.operator = this.operator.bind(this);
    this.clear = this.clear.bind(this);
    this.decimal = this.decimal.bind(this);
    this.equals = this.equals.bind(this);
  }
  numberHandler(event) {
    const value = event.target.innerHTML;
    switch (value) {
      case ".":
        this.decimal;
        break;

      case "AC":
        this.clear;
        break;
      default:
        this.setState(state => ({
          num: state.num !== 0 ? state.num + value : value }));

        break;}


    this.setState(state => ({
      display: state.num }));

    console.log("number" + value);

  }
  clear(event) {
    this.setState({
      num: 0,
      result: 0,
      display: 0,
      operator: "" });

    console.log("clear");

  }
  decimal(event) {
    this.setState(state => ({
      num: state.num + "." }));

    console.log("decimal");

  }
  operator(event) {
    const value = event.target.innerHTML;
    const o = this.state.operator;
    const num = Number(this.state.num);
    const result = Number(this.state.result);
    console.log("value" + value);
    console.log("result" + result);

    if (o != "" && num != 0 && result != 0) {
      console.log("equals first ");
      this.equals();
      console.log("result " + this.state.result);

      this.setState(state => ({
        operator: value }));

    }if (result != 0) {
      this.setState(state => ({
        operator: value,
        display: result }));

    } else {
      this.setState(state => ({
        operator: value,
        display: state.num,
        result: state.num,
        num: 0 }));


    }
    this.setState(state => ({

      display: state.result }));

    console.log("operator");

  }
  equals(event) {
    const a = Number(this.state.result);
    const b = Number(this.state.num);
    const o = this.state.operator;
    const result = o === "+" ? a + b : o === "-" ? a - b : o === "X" ? a * b : o === "/" ? a / b : "isNan";

    console.log("a" + a + "b" + b + "o" + o + "result" + result);
    this.setState(state => ({
      result: result,
      num: 0,
      operator: "",
      display: result }));


    console.log("equals result");

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "wrapper" }, /*#__PURE__*/
      React.createElement("div", { id: "container" }, /*#__PURE__*/
      React.createElement("p", { id: "display" }, this.state.display), /*#__PURE__*/
      React.createElement("div", { id: "keys" }, /*#__PURE__*/
      React.createElement("div", { id: "numberkeys" },
      numberkeys.map((key) => /*#__PURE__*/
      React.createElement("button", { onClick: key == "AC" ? this.clear : key === "." ? this.decimal : this.numberHandler, className: "key", id: numberids[numberkeys.indexOf(key)] }, key))), /*#__PURE__*/



      React.createElement("div", { id: "calckeys" },
      calckeys.map((key) => /*#__PURE__*/
      React.createElement("button", { className: "key", id: calcids[calckeys.indexOf(key)],
        onClick: key === "=" ? this.equals : this.operator },
      key)))))));







  }}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));