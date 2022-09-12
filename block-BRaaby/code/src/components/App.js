import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }
  handleClick = () => {
    this.setState({
      data: null,
    });
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  };

  render() {
    console.log(this.state.data);
    if (!this.state.data) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        <article className="text-center">
          {this.state.data.results.map((user, index) => (
            <div key={user.id.value}>
              <img src={user.picture.large} alt="" />
              <h2>My Name is:</h2>
              <p>{`${user.name.title}  ${user.name.first}  ${user.name.last}`}</p>
              <button onClick={this.handleClick}>
                {!this.state.data ? "Loading.." : "Random User"}
              </button>
            </div>
          ))}
        </article>
      </div>
    );
  }
}
export default App;
