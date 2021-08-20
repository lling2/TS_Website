/*
 * @Author: your name
 * @Date: 2021-08-20 01:03:18
 * @LastEditTime: 2021-08-20 01:13:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_demo/apps/project/src/routers/index.tsx
 */
import React, { FC, Suspense } from "react";
import { Route, Switch, RouteProps } from "react-router";
import Loading from '@components/Loading';
// import NotFound from '@pages/NotFound/NotFound';
const Home = React.lazy(() => import("@pages/Home")); // 异步加载组件
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
//   {
//     path: "/login",
//     exact: true,
//     component: Login,
//   },
//   {
//     path: "/ques",
//     exact: true,
//     component: QuesBank,
//   },
//   {
//     path: "/ques/info",
//     exact: true,
//     component: QuesInfo,
//   },
//   {
//     path: "/interview",
//     exact: true,
//     component: InterViewExper,
//   },
//   {
//     path: "/interview/info",
//     exact: true,
//     component: InterviewExperInfo,
//   },
//   {
//     path: "/pratice",
//     exact: true,
//     component: BestPratice,
//   },
//   {
//     path: "/pratice/info",
//     exact: true,
//     component: PraticeInfo,
//   },
//   {
//     path: "/job",
//     exact: true,
//     component: JobRecommend,
//   },
//   {
//     path: "/job/info",
//     exact: true,
//     component: JobInfo,
//   }
];


// 定义路由组件
const Routes:FC = ()=>{
    // 在这里拿到 token, 判断token是否有效
    return (
        <Suspense fallback={<Loading />}>
            <Switch>
                {
                    routes.map((r,index)=>{
                        const {path,exact,component} = r;
                        const LazyCom = component;
                        return (
                          <Route
                            key={index}
                            path={path}
                            exact={exact}
                            render={
                                (props)=><LazyCom {...props} />
                            }
                          />
                        )
                    })
                }
                {/* 兜底的路由 */}
                {/* <Route component={NotFound} /> */}
            </Switch>
        </Suspense>
    )
}

export default Routes;