import React from "react";
import { Link, Outlet } from "react-router-dom";
import { withRouter } from "../utils/withRouter";

class Level extends React.Component {
  render() {
    let category = this.props.params;
    return (
      <section className="">
        <Link to="/">Back to categories</Link>
        <h1 className="text-center">Please chose your difficulty level</h1>
        <ul className="level text-center">
          {["easy", "medium", "hard"].map((level, i) => (
            <li key={i}>
              <Link to={`/${category.category}/${level}`}>{level}</Link>
            </li>
          ))}
        </ul>
        <Outlet />
      </section>
    );
  }
}

export default withRouter(Level);
