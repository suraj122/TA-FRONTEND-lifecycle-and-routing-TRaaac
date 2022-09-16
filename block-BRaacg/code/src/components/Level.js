import React from "react";
import { Link } from "react-router-dom";

class Level extends React.Component {
  render() {
    return (
      <section className="text-center">
        <Link to="/">Back to categories</Link>
        <h1 className="text-center">Please chose your difficulty level</h1>
        <ul className="level">
          {["Easy", "Medium", "Hard"].map((level, i) => (
            <li key={i}>
              <Link to="/categories/level">{level}</Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Level;
