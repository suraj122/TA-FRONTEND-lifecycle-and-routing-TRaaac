import React from "react";

import { Link, useParams } from "react-router-dom";

function SingleArticle() {
  let params = useParams();
  return (
    <div>
      <Link to="/articles">Back to articles</Link>
      <article>
        <h1>The slug of the article is {params.slug}</h1>
      </article>
    </div>
  );
}

export default SingleArticle;
