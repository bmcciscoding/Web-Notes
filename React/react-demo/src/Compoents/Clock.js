import React, { Component } from 'react'

export default class Clock extends Component {

  constructor(props) {
    super(props)
    console.log(props);

    // props.newDate = new Date() // 编译器会报错：TypeError: Cannot add property newDate, object is not extensible

    this.state = {
       date: props.date
    };

  };

    componentDidMount() {
      setTimeout(() => {
              this.setState({
      didMount: true
    })
      }, 2000);

  };
  

  render() {
    return (
      <div>
        <p>
          <div>
            const string: This is a clock
          </div>
          <div>
            DidMount {this.state.didMount ? 'yes' : 'no'}
          </div>
          <div>
            prop: {this.props.date.toLocaleTimeString()}
          </div>
          <div>
            state: {this.state.date.toLocaleTimeString()}
          </div>
        </p>
      </div>
    )
  }
}
