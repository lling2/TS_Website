/*
 * @Author: your name
 * @Date: 2021-08-25 11:22:45
 * @LastEditTime: 2021-09-04 21:07:52
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

// import React from 'react';
// import { Router } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
// import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
// // redux
// // import { store, persistor } from './redux/store';
// // routes
// import routes, { renderRoutes } from '../routes';

// const history = createBrowserHistory();

// export default function App() {
//   console.log(routes, 'routes............');
//   return (
//     <Router history={history}>
//       {/* <JwtProvider> */}
//         {/* <Settings />
//         <ScrollToTop />
//         <GoogleAnalytics /> */}
//         {renderRoutes(routes)}
//       {/* </JwtProvider> */}
//     </Router>
//   );
// }
