import React, { Component } from "react";

class SubClock extends Component {
  render() {
    return (
      <div>
        SubClock
        <button onClick={this.props.onTap.bind(this, 555)}>
          Tap Sub Compoents
        </button>
      </div>
    );
  }
}

function IfConditionDiv(props) {
  const isLog = props.isLog;
  return isLog ? <div>Log Out</div> : <div>Log In</div>;
}

function ListDiv(props) {
  const lists = props.lists;
  const items = lists.map((item, index) => (
    <li key={item.toString()}>
      {index}:{item}
    </li>
  ));
  return <ul>{items}</ul>;
}

export default class Clock extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    // props.newDate = new Date() // 编译器会报错：TypeError: Cannot add property newDate, object is not extensible

    this.state = {
      hide: true,
      date: props.date,
      text: "I am a react demo",
      useTop: false,
    };
  }

  componentDidMount() {
    // setInterval(() => {
    //   // this.setState({
    //   //   date: new Date(),
    //   //   useTop: !this.state.useTop,
    //   // });
    //   this.setState((s, p) => ({
    //     date: new Date(),
    //     useTop: !s.useTop,
    //   }));
    // }, 1000);
  }

  // changeTop = (p1, e) => {
  //   console.log(p1, e);
  // };

  changeTop(p1, e) {
    const str = `p1:\t${p1}\ne:\t${e}\nthis:\t${this}`;
    console.log(str);

    this.setState((s, p) => ({
      useTop: !s.useTop,
    }));
  }

  handleSubComEevent(p1, e) {
    console.log("tap sub\n", p1, e);
  }

  showContent() {
    const hide = this.state.hide;
    this.setState({
      hide: !hide,
    });
  }

  render() {
    const hide = this.state.hide;
    return (
      <div>
        <button onClick={this.showContent.bind(this)}>
          {hide ? "show" : "hide"}
        </button>
        {hide ? null : (
          <p>
            <div>const string: This is a clock</div>
            <div>DidMount {this.state.didMount ? "yes" : "no"}</div>
            <div>prop: {this.props.date.toLocaleTimeString()}</div>
            <div>state: {this.state.date.toLocaleTimeString()}</div>
            <button onClick={this.changeTop.bind(this, "p1")}>
              {this.state.useTop
                ? this.state.text.toLocaleUpperCase()
                : this.state.text.toLocaleLowerCase()}
            </button>

            <h2>
              事件绑定
              <button onClick={this.changeTop}>this.changeTop</button>
              <button onClick={this.changeTop.bind(this)}>
                this.changeTop.bind(this
              </button>
              <button onClick={this.changeTop.bind(this, 5)}>
                this.changeTop.bind(this, 5)
              </button>
              <button onClick={(e) => this.changeTop(5, e)}>
                (e) => this.changeTop(5, e)
              </button>
              <SubClock onTap={this.handleSubComEevent} />
            </h2>

            <h2>
              渲染
              <IfConditionDiv isLog={this.state.useTop}></IfConditionDiv>
              <ListDiv lists={[1, 2, 3, 4, 5]} />
            </h2>
          </p>
        )}
      </div>
    );
  }
}
