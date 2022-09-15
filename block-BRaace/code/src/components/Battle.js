import React from "react";
import { Link, Outlet } from "react-router-dom";

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: "",
      playerTwo: "",
      playerOneIsvisible: false,
      playerTwoIsvisible: false,
      playerOneData: null,
      playerTwoData: null,
    };
  }

  handlePlayerOne = (e) => {
    this.setState({
      playerOne: e.target.value,
    });
  };

  handlePlayerTwo = (e) => {
    this.setState({
      playerTwo: e.target.value,
    });
  };

  handleSubmitOne = (event) => {
    event.preventDefault();
    this.setState({
      playerOneIsvisible: true,
    });
    fetch(`https://api.github.com/users/${this.state.playerOne}`)
      .then((res) => res.json())
      .then((playerOneData) => this.setState({ playerOneData }));
  };
  handleSubmitTwo = (event) => {
    event.preventDefault();
    this.setState({
      playerTwoIsvisible: true,
    });
    fetch(`https://api.github.com/users/${this.state.playerTwo}`)
      .then((res) => res.json())
      .then((playerTwoData) => this.setState({ playerTwoData }));
  };

  render() {
    console.log(this.state.playerOneData);
    console.log(this.state.playerTwoData);
    return (
      <div>
        <header className="text-center">
          <h1>Instructions</h1>
          <ul className="battle-instructions">
            <li>Enter two Github users</li>
            <li>Battle</li>
            <li>See the winner</li>
          </ul>
        </header>
        <div className="battle-ground">
          <h2 className="text-center">Playres</h2>
          <div className="battle-input">
            <div>
              {this.state.playerOneIsvisible ? (
                <PlayerOne playerOne={this.state.playerOneData} />
              ) : (
                <form onSubmit={this.handleSubmitOne} action="">
                  <label htmlFor="">Player One</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Github username"
                    onChange={(e) => this.handlePlayerOne(e)}
                    value={this.state.inputText}
                  />
                  <input type="submit" value="submit" />
                </form>
              )}
            </div>
            <div>
              {this.state.playerTwoIsvisible ? (
                <PlayerTwo playerTwo={this.state.playerTwoData} />
              ) : (
                <form onSubmit={this.handleSubmitTwo} action="">
                  <label htmlFor="">Player Two</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Github username"
                    onChange={(e) => this.handlePlayerTwo(e)}
                    value={this.state.inputText}
                  />
                  <input type="submit" value="submit" />
                </form>
              )}
            </div>
          </div>
          {this.state.playerOneIsvisible && this.state.playerTwoIsvisible ? (
            <div className="text-center">
              <Link
                to={`/result/${this.state.playerOne}&&${this.state.playerTwo}`}
              >
                <button>Battle</button>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
        <Outlet />
      </div>
    );
  }
}
export default Battle;

function PlayerOne(props) {
  if (!props.playerOne) {
    return <>Loading...</>;
  }
  return (
    <div>
      <img src={props.playerOne.avatar_url} alt="" />
      <p>{props.playerOne.name}</p>
    </div>
  );
}
function PlayerTwo(props) {
  if (!props.playerTwo) {
    return <>Loading...</>;
  }
  return (
    <div>
      <img src={props.playerTwo.avatar_url} alt="" />
      <p>{props.playerTwo.name}</p>
    </div>
  );
}
