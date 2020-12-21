import React from "react"
/** @jsx jsx */
import { css, jsx } from "@emotion/react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { pageWrappper } from "../components/styles/main"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div css={pageWrappper}>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
