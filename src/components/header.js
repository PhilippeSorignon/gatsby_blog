import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header
        className="masthead"
        style={{
          backgroundImage: "url('" + this.props.image + "')"
        }}
      >
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>{ this.props.title }</h1>
                <span className="subheading">
                  { this.props.subtitle }
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
