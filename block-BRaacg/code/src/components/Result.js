import React from "react";
import { withRouter } from "../utils/withRouter";
import { Link } from "react-router-dom";

class Result extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let result = this.props.params.result.split("=")[1];
    return (
      <div>
        <Link to="/">Back to home</Link>
        <h1 className="text-center">Your total correct answer is {result}</h1>
      </div>
    );
  }
}

export default withRouter(Result);
