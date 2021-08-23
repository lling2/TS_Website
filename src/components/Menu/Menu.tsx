import React, { FC, useEffect, useCallback, Fragment } from "react";
import {
  NavLink, // 跳转
  useLocation,
  useHistory 
} from "react-router-dom";
import "./Menu.css";
import {
  useRecoilState
} from "recoil";
import {
  loginSel
} from "@recoil/selectors/loginSelectors";
import {
  user
} from "@api/index";
import {
  storage
} from "@utils/index";

const Banner: FC<{}> = () => {
  const [loginInfo, setLoginInfo] = useRecoilState(loginSel);
  const history = useHistory();
  const location = useLocation();

  // 相当于 class didmount
  useEffect(() => {
    if (!loginInfo.headimgurl && location.pathname !== "/") {
      history.push({
        pathname: "/login",
        state: {
          from: {
            pathname: location.pathname,
          },
        },
      });
    }
    // 相当于destroy
    // return ()=>{}
  }, []);

  /* 
   useCallback 缓存函数，不会每次生成新的函数
   useMemo  缓存值
   React.memo // 实现浅比较=》shouldComponentUpdate/React.pureComponent
  */

  const handleLoginOut = useCallback(() => {
    // 清空掉数据
    setLoginInfo({
      headimgurl: "",
      nickname: "",
      uid: 0,
      uuid: 0,
    });

    // 本地存储删除
    storage.remove("userInfo");
    user
      .loginOut()
      .then((res) => {
        // window.location.reload();
        history.push({
          pathname: "/",
          state: {
            from: {
              pathname: location.pathname,
            },
          },
        });
      })
      .catch((err) => { });
  }, []);

  return (
    <Fragment>
      <header className="components-banner ">
        <div className="header-box-bg"></div>
        <div className="header-box layout-container">
          <img
            src={require("@assets/images/logo3.png")}
            className="logo"
            alt=""
          />
          <nav className="nav-list">
            <NavLink
              className="nav-item"
              exact
              activeClassName="nav-item_act"
              to="/"
            >
              🏠&nbsp;&nbsp;Home
            </NavLink>
            <NavLink
              className="nav-item"
              activeClassName="nav-item_act"
              to="/ques"
            >
              💎&nbsp;&nbsp;Import
            </NavLink>
            <NavLink
              className="nav-item"
              activeClassName="nav-item_act"
              to="/interview"
            >
              ✍🏻&nbsp;&nbsp;Normalize
            </NavLink>
            <NavLink
              className="nav-item"
              activeClassName="nav-item_act"
              to="/pratice"
            >
              📚&nbsp;&nbsp;Publish
            </NavLink>
            <NavLink
              className="nav-item"
              activeClassName="nav-item_act"
              to="/job"
            >
              🎯 &nbsp;&nbsp;Logs
            </NavLink>
          </nav>
          {/* 右边的登录状态判断 */}
          {loginInfo.headimgurl ? (
            <div className="user">
              <img className="user-avatar" src={loginInfo.headimgurl} alt="" />
              <div onClick={handleLoginOut} className="login-out">
                退出登录
              </div>
            </div>
          ) : null}
        </div>
      </header>
    </Fragment>
  );
};

export default React.memo(Banner);
