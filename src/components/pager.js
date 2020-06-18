import React from "react";
import { Link } from "gatsby"

class Pager extends React.Component {
  render() {
    return (
      <div className="clearfix">
        <Link className="btn btn-primary float-right" to="#">
          Older Posts →
        </Link>
      </div>
    );
  }
}

export default Pager;
