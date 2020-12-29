import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    // props.newDate = new Date() // 编译器会报错：TypeError: Cannot add property newDate, object is not extensible

    this.state = {
      date: props.date,
      text: "I am a react demo",
      useTop: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        didMount: true,
      });
    }, 2000);
  }

  changeTop = () => {
    console.log(this.state);
    this.setState({
      useTop: !this.state.useTop,
    });
  };

  render() {
    return (
      <div>
        <p>
          <div>const string: This is a clock</div>
          <div>DidMount {this.state.didMount ? "yes" : "no"}</div>
          <div>prop: {this.props.date.toLocaleTimeString()}</div>
          <div>state: {this.state.date.toLocaleTimeString()}</div>
          <button onClick={this.changeTop}>
            {this.state.useTop
              ? this.state.text.toLocaleUpperCase()
              : this.state.text.toLocaleLowerCase()}
          </button>
        </p>
      </div>
    );
  }
}
