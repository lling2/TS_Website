import React, {
  FC, 
  Suspense 
} from "react";
import {
  Route,
  Switch,
  RouteProps 
} from "react-router";
import Loading from '@components/Loading';
const NotFound = React.lazy(() => import("@pages/NotFound/NotFound"));
const Home = React.lazy(() => import("@pages/Home/Home")); // 异步加载组件
const Import = React.lazy(() => import("@pages/Import"));
const Logs = React.lazy(() => import("@pages/Logs"));

// 定义路由集合
export const routes: RouteProps[] = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/import",
    exact: true,
    component: Import,
  },
  {
    path: "/logs",
    exact: true,
    component: Logs,
  },
];

// 定义路由组件
const Routes: FC = () => {
  // 在这里拿到 token, 判断token是否有效
  return (
    <Suspense fallback={<Loading/>}>
      <Switch>
        {
          routes.map((item, key) => {
            const {path, exact, component} = item;
            const LazyCom = component;
            return(
              <Route
                key={key}
                path={path}
                exact={exact}
                render={(props) => <LazyCom {...props} />}
              >
              </Route>  
            )
          })
        }
        {/* 兜底路由 */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  )
}

export default Routes;

// import NProgress from 'nprogress';
// import { Switch, Route, Redirect, RouteProps } from 'react-router-dom';
// import React, { Suspense, Fragment, lazy, useEffect, useMemo, ReactNode } from 'react';
// // material
// import { makeStyles } from '@material-ui/core/styles';
// // guards
// // import GuestGuard from '../guards/GuestGuard';
// // components
// import Loading from '@components/Loading';
// import { PATH } from './paths';
// // import DashboardRoutes from './dashboard.routes';
// // import HomeRoutes from './home.routes';
// // import DocsRoutes from './docs.routes';

// // ----------------------------------------------------------------------

// const nprogressStyle = makeStyles((theme) => ({
//   '@global': {
//     '#nprogress': {
//       pointerEvents: 'none',
//       '& .bar': {
//         top: 0,
//         left: 0,
//         height: 2,
//         width: '100%',
//         position: 'fixed',
//         zIndex: theme.zIndex.snackbar,
//         backgroundColor: theme.palette.primary.main,
//         boxShadow: `0 0 2px ${theme.palette.primary.main}`
//       },
//       '& .peg': {
//         right: 0,
//         opacity: 1,
//         width: 100,
//         height: '100%',
//         display: 'block',
//         position: 'absolute',
//         transform: 'rotate(3deg) translate(0px, -4px)',
//         boxShadow: `0 0 10px ${theme.palette.primary.main}, 0 0 5px ${theme.palette.primary.main}`
//       }
//     }
//   }
// }));

// function RouteProgress(props: RouteProps) {
//   // React使用NProgress顶部加载进度条
//   nprogressStyle();

//   NProgress.configure({
//     speed: 500,
//     showSpinner: false // 进度环显示隐藏
//   });

//   useMemo(() => {
//     NProgress.start();
//   }, []);

//   useEffect(() => {
//     NProgress.done();
//   }, []);

//   return <Route {...props} />;
// }

// export function renderRoutes(routes: RouteItem[] = []) {
//   // 通过路由渲染页面
//   return (
//     <Suspense fallback={<span>loading....</span>}>
//       <Switch>
//         {routes.map((route, idx) => {
//           const Component = route.component;
//           const Guard = route.guard || Fragment;
//           const Layout = route.layout || Fragment;

//           return (
//             <RouteProgress
//               key={`routes-${idx}`}
//               path={route.path}
//               exact={route.exact}
//               render={(props: any) => (
//                 <Guard>
//                   <Layout>
//                     {route.routes && route.routes ? (
//                       renderRoutes(route.routes)
//                     ) : (
//                       <Component {...props} />
//                     )}
//                   </Layout>
//                 </Guard>
//               )}
//             />
//           );
//         })}
//       </Switch>
//     </Suspense>
//   );
// }

// type RouteItem = {
//   exact?: boolean;
//   guard?: ({ children }: { children: ReactNode }) => JSX.Element;
//   path?: string | string[];
//   component?: any;
//   layout?: ({ children }: { children: ReactNode }) => JSX.Element;
//   routes?: {
//     component: any;
//     path?: string | string[];
//     exact?: boolean;
//   }[];
// };

// const routes: RouteItem[] = [
//   // Others Routes
//   {
//     exact: true,
//     // guard: GuestGuard,
//     path: [PATH.import],
//     component: lazy(() => import('../pages/Import'))
//   },
//   // App Routes
//   // DashboardRoutes
// ];

// export default routes;
