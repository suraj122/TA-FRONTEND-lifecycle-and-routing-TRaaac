import React from "react";
import { Link } from "react-router-dom";

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch("https://opentdb.com/api_category.php")
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    if (!this.state.data) {
      return <h1>Loading...</h1>;
    }
    let categories = this.state.data.trivia_categories;
    console.log(categories);
    return (
      <section>
        <header className="text-center">
          <h1>Welcom to the Quiz App</h1>
          <h2>Please chose your Categories</h2>
        </header>
        <ul className="categories">
          {categories.map((category) => (
            <li key={category.id}>
              <Link to={`/category/${category.name}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Categories;
