import React from "react";

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: false,
      timerStart: 0,
      timerTime: 0,
    };
  }

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime,
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart,
      });
    });
  };

  stopTimer = () => {
    this.setState({
      timerOn: false,
    });
    clearInterval(this.timer);
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0,
    });
  };

  render() {
    const { timerTime } = this.state;
    let centiSeconds = "0" + (Math.floor(timerTime / 10) % 10);
    let seconds = "0" + (Math.floor(timerTime / 1000) % 60);
    let minutes = "0" + (Math.floor(timerTime / 60000) % 60);
    let hour = "0" + (Math.floor(timerTime / 3600000) % 60);
    return (
      <div className="timer text-center">
        <div>
          <span>{hour}</span> : <span>{minutes}</span> : <span>{seconds}</span>{" "}
          : <span>{centiSeconds}</span>
        </div>

        {this.state.timerOn === false && this.state.timerTime === 0 && (
          <button onClick={this.startTimer}>Start</button>
        )}
        {this.state.timerOn === true && (
          <button onClick={this.stopTimer}>Stop</button>
        )}
        {this.state.timerOn === false && this.state.timerTime > 0 && (
          <button onClick={this.startTimer}>Resume</button>
        )}
        {this.state.timerOn === false && this.state.timerTime > 0 && (
          <button onClick={this.resetTimer}>Reset</button>
        )}
        <span onClick={this.props.removeTimer} className="cross">
          X
        </span>
      </div>
    );
  }
}

export default StopWatch;
