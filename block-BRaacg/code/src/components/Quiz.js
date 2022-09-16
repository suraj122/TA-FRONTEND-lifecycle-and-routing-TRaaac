import React from "react";
import { Link } from "react-router-dom";

import { withRouter } from "../utils/withRouter";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      activeIndex: 0,
      correct_answer: 0,
    };
  }

  componentDidMount() {
    let level = this.props.params.level;
    let category = this.props.params.category.split("=")[1];
    fetch(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${level.toLowerCase()}`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }

  handleNext = () => {
    this.setState({
      activeIndex: this.state.activeIndex + 1,
    });
  };
  handlePrev = () => {
    this.setState({
      activeIndex: this.state.activeIndex - 1,
    });
  };

  handleAnswer = (ans) => {
    if (
      [...this.state.data.results][this.state.activeIndex].correct_answer ===
      ans
    ) {
      this.setState({
        correct_answer: this.state.correct_answer + 1,
      });
    }
  };

  render() {
    if (!this.state.data) {
      return <h1>Loading...</h1>;
    }
    let quiz = [...this.state.data.results];
    let index = this.state.activeIndex;
    return (
      <article>
        <div className="">
          <Link to="/">Back to Home</Link>
          <h1 className="text-center">Please start attempting question</h1>
        </div>
        <ul>
          <li>
            <h3>
              {this.state.activeIndex + 1}/{quiz.length}
            </h3>
            <h2>{quiz[index].question}</h2>
            <ul>
              {quiz[index].incorrect_answers
                .concat(quiz[index].correct_answer)
                .sort(() => 0.5 - Math.random())
                .map((answer, i) => (
                  <li onClick={() => this.handleAnswer(answer)} key={i}>
                    {answer}
                  </li>
                ))}
            </ul>
            <div className="flex text-right">
              {this.state.activeIndex < quiz.length &&
              this.state.activeIndex > 0 ? (
                <button onClick={this.handlePrev}>Previous</button>
              ) : (
                ""
              )}
              {this.state.activeIndex < quiz.length - 1 &&
              this.state.activeIndex >= 0 ? (
                <button onClick={this.handleNext}>Next</button>
              ) : (
                ""
              )}
              {this.state.activeIndex > quiz.length - 2 ? (
                <Link
                  to={`/${this.props.params.category}/${this.props.params.level}/result=${this.state.correct_answer}`}
                >
                  <button>View Result</button>
                </Link>
              ) : (
                ""
              )}
            </div>
          </li>
        </ul>
        <h3>Correct Answer: {this.state.correct_answer}</h3>
      </article>
    );
  }
}

export default withRouter(Quiz);
