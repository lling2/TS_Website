import React, { FC } from "react";
import Routes from '@routes/index';
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Layout from '@layouts/index'
import Import from '@pages/Import'

const App: FC<{}> = () => {
  return (
    <RecoilRoot>
      <Router basename='/'>
        {/* <Layout>
          <Routes />
        </Layout> */}
        <Import/>
      </Router>
    </RecoilRoot>
  );
};

export default App;