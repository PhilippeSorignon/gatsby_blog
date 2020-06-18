import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import MainContent from "../components/maincontent"

const IndexPage = () => (
  <>
    <Layout>
      <Header title="Clean Blog" subtitle="A Blog Made With Gatsby" image="home-bg" />
      <MainContent />
    </Layout>
  </>
)

export default IndexPage
