/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import { Helmet } from "react-helmet"
import Navigation from "./navigation"
import Footer from "./footer"

import "../../static/vendor/bootstrap/css/bootstrap.min.css"
import "../../static/vendor/fontawesome-free/css/all.min.css"
import "../../static/css/clean-blog.min.css"

const Layout = ({ children }, props) => {

  return (
    <>
      <Helmet>
        <title>Clean Blog</title>
        <link rel="stylesheet" type="text/css" href="/vendor/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="/vendor/fontawesome-free/css/all.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/clean-blog.min.css" />
        <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css' />
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css' />

        </Helmet>

      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
