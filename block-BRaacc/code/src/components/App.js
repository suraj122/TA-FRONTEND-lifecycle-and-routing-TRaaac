import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="wrapper-main">
        <h2>Welcome to Homepage</h2>
        <ul className="">
          <li>
            <Link to="/articles">Articles Page</Link>
          </li>
          <li>
            <Link to="/books">Books Page</Link>
          </li>
          <li>
            <Link to="/peoples">Peoples Page</Link>
          </li>
        </ul>
      </main>
    );
  }
}
export default App;
