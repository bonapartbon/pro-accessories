import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

class NotFound extends React.Component {
  render() {
    return (
      <div className="text-center pt-4">
          <h2>Sorry</h2>
          <p>The page that you are looking for is not found.</p>
          <Link to="/">
              Back to HomePage.
          </Link>
      </div>
    );
  }
}

export default NotFound;