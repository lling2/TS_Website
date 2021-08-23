import React, { FC } from "react";
import Routes from '@routes/index';
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Layout from '@layouts/index'

const App: FC<{}> = () => {
  return (
    // <RecoilRoot>
      <Layout>
        22222
      </Layout>
      /* <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router> */
    // </RecoilRoot>
  );
};

export default App;