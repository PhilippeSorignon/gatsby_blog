import React from "react";
import Pager from "./pager";
import { StaticQuery, graphql } from "gatsby"

class MainContent extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <StaticQuery
              query={graphql`
                query post {
                  flask {
                    allPosts {
                      edges {
                        node {
                          id
                          title
                          content
                        }
                      }
                    }
                  }
                }
              `}
              render={data =>
                data.flask.allPosts.edges.map((post, i) => {
                  return (
                    <>
                      <div className="post-preview" key={i}>
                        <a href={`/article/${post.node.id}`}>
                          <h2 className="post-title">
                            {post.node.title}
                          </h2>
                          <h3 className="post-subtitle">
                            {post.node.content.substring(0, 40)}...
                          </h3>
                        </a>
                      </div>
                      <hr />
                    </>
                  )
                })
              }
            />

            <Pager></Pager>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContent;
