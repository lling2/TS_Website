/*
 * @Author: your name
 * @Date: 2021-08-25 11:22:45
 * @LastEditTime: 2021-09-04 13:00:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_demo/apps/project/src/pages/App.tsx
 */
import React, { FC } from "react";
import Routes from '@routes/index';
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Layout from '@layouts/dashboard'
import Import from '@pages/Import'

const App: FC<{}> = () => {
  return (
    <RecoilRoot>
      <Router basename='/'>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </RecoilRoot>
  );
};

export default App;