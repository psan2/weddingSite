import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cleo from "../components/cleo"
import Bloom from "../components/bloom"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "inline-block",
          width: "50%",
          marginBottom: "10px",
        }}
      >
        <div style={{ display: "inline-block", width: "50%" }}>
          <Bloom />
        </div>
        <div
          style={{
            display: "inline-block",
            width: "50%",
            marginBottom: "10px",
          }}
        >
          <Cleo />
        </div>
      </div>
    </div>
    <div style={{ textAlign: "center" }}>
      <div
        style={{ display: "inline-block", width: "100%", maxWidth: "500px" }}
      >
        <p>
          Oops... you're early! Earlier than Pat thought you might be, anyway.
        </p>
        <p>
          We'll be posting additional wedding details in the near future. In the
          meantime, we hope you'll join us in Scottsdale, AZ on December 5th,
          2020!
        </p>
        <p>
          Feel free to email us at{" "}
          <a href="mailto:&#109;&#097;&#110;&#116;&#117;&#099;&#099;&#105;&#119;&#101;&#100;&#100;&#105;&#110;&#103;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
            &#109;&#097;&#110;&#116;&#117;&#099;&#099;&#105;&#119;&#101;&#100;&#100;&#105;&#110;&#103;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
          </a>{" "}
          if you have any questions!
        </p>
        <p>💝 Pat & Michelle</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
