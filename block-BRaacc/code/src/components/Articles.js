import React from "react";
import articles from "../articles.json";
import { Link } from "react-router-dom";

class Articles extends React.Component {
  render() {
    return (
      <div className="article-list">
        <ul>
          {articles.map((article) => (
            <li key={article.slug}>
              <Link to={`/articles/${article.slug}`}>
                <h3>{article.title}</h3>
              </Link>
              <strong>{article.author}</strong>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Articles;
