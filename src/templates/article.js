import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"

export const query = graphql`
query postid($id: ID!) {
  flask {
    node(id: $id) {
      ... on FLASK_Post {
        title
        image
        content
      }
    }
  }
}

`

const Article = ({ data }) => {
  const article = data.flask.node
  return (
    <Layout>
      <Header title={article.title} subtitle="A Blog Post" image={article.image} />
      <article>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <p>{article.content}</p>
            </div>
          </div>
        </div>
      </article>
      <hr />
    </Layout>
  )
}

export default Article
