import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import bloomPng from "../images/bloom.png"
import cleoPng from "../images/cleo.png"
import Header from "../components/header"

const IndexPage = () => (
  <Layout>
    <Header siteTitle="Home" />
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
          <img src={bloomPng} alt="Cat with a Fez" />
        </div>
        <div
          style={{
            display: "inline-block",
            width: "50%",
            marginBottom: "10px",
          }}
        >
          <img src={cleoPng} alt="Cat with a bonnet" />
        </div>
      </div>
    </div>
    <div style={{ textAlign: "center" }}>
      <div
        style={{ display: "inline-block", width: "100%", minWidth: "500px" }}
      >
        <h2>Wedding Updates</h2>
        <p>
          Given the state of the world and out of consideration for everyone's
          safety, we've decided to postpone our wedding. We're still very
          excited to see each and every one of you there, and we hope that
          you'll be able to join us on October 30, 2021!
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
