import React from "react";

class CountDown extends React.Component {
  render() {
    return (
      <div className="timer text-center">
        <div>
          <span>00 : 00 : 00</span>
        </div>

        <button>Start</button>
        <span onClick={this.props.removeTimer} className="cross">
          X
        </span>
      </div>
    );
  }
}

export default CountDown;
