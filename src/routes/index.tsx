import React, { FC, Suspense } from "react";
import {
  Route,
  Switch,
  RouteProps 
} from "react-router";
import Loading from '@components/Loading/Loading';
const NotFound = React.lazy(() => import("@pages/NotFound/NotFound"));
const Home = React.lazy(() => import("@pages/Home/Home")); // 异步加载组件
const Import = React.lazy(() => import("@pages/Import"));
const Logs = React.lazy(() => import("@pages/Logs"));
// const Login = React.lazy(() => import("@pages/Login/Login"));
// const QuesBank = React.lazy(() => import("@pages/QuesBank/QuesBank"));
// const QuesInfo = React.lazy(() => import("@pages/QuesInfo/quesInfo"));
// const InterViewExper = React.lazy(() => import("@pages/InterviewExper/interviewExper"));
// const InterviewExperInfo = React.lazy(
//   () => import("@pages/InterviewExperInfo/interviewExperInfo")
// );
// const BestPratice = React.lazy(() => import("@pages/BestPratice/bestPratice"));

// const PraticeInfo = React.lazy(() => import("@pages/PraticeInfo/praticeInfo"));
// const JobRecommend = React.lazy(
//   () => import("@pages/JobRecommend/jobRecommend")
// );

// const JobInfo = React.lazy(() => import("@pages/JobInfo/jobInfo"));

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