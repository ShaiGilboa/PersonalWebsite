import React from "react";
import Navbar from "../components/general/navbar";
import SEO from "../components/general/seo";

import "../css/App.css"
import "../css/index.css"
import Layout from "../layouts/main";

export default function Home() {
  return (
    <Layout>
      <Navbar />
    </Layout>
  );
}
