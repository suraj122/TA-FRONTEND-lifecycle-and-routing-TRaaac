import React from "react";
import CountDown from "./CountDown";
import StopWatch from "./StopWatch";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showWatch: false,
      showCountdown: false,
    };
  }
  handleStopwatch = () => {
    this.setState({
      showWatch: !this.state.showWatch,
    });
  };

  handleCountdown = () => {
    this.setState({
      showCountdown: !this.state.showCountdown,
    });
  };

  render() {
    return (
      <div>
        <header>
          <h1 className="text-center">Timers</h1>
        </header>
        <div className="flex">
          {this.state.showWatch ? (
            <StopWatch removeTimer={this.handleStopwatch} />
          ) : (
            <button onClick={this.handleStopwatch}>Show Stopwatch </button>
          )}

          {this.state.showCountdown ? (
            <CountDown removeTimer={this.handleCountdown} />
          ) : (
            <button onClick={this.handleCountdown}>Show Countdown</button>
          )}
        </div>
      </div>
    );
  }
}
export default App;
