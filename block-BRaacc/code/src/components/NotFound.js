import React from "react";

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <Link to="/">Back to Homepage</Link>
      <h1>Not Found</h1>
    </div>
  );
}

export default NotFound;
