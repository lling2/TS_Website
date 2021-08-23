import 
  React, {
    FC, 
    useEffect,
    useCallback,
    Fragment
  } from "react";
import {
  NavLink, // 跳转
  useLocation,
  useHistory,
  Router
} from "react-router-dom";
import "./Menu.css";
import {
  useRecoilState
} from "recoil";
import {
  loginSelect
} from "@recoil/selectors/loginSelectors";
import {
  user
} from "@api/index";
import {
  storage,
  constants
} from "@utils/index";

const Banner: FC<{}> = () => {
  const [loginInfo, setLoginInfo] = useRecoilState(loginSelect);
  const history = useHistory();
  const location = useLocation();

  // 相当于 class didmount
  useEffect(() => {
    if (!loginInfo.userName && location.pathname !== "/") {
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
   React.memo // 实现浅比较 =》shouldComponentUpdate/React.pureComponent
  */
  const handleLoginOut = useCallback(() => {
    // 清空掉数据
    setLoginInfo({
      uuid: 0,
      imgUrl: '',
      userToken: '',
      userName: 'admin'
    });

    // 本地存储删除
    storage.remove("userInfo");
    user
      .loginOut()
      .then((res) => {
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
            {
              constants && constants.Menus && constants.Menus.map((item, key) => (
                <Router
                  className="nav-item"
                  activeClassName="nav-item_act"
                  to={item.to}
                  key={key}
                >
                  {/* 💎&nbsp;&nbsp;Import */}
                  {item.name}
                </Router>
              ))
            }
          </nav>
          {/* 右边的登录状态判断 */}
          {loginInfo.userName ? (
            <div className="user">
              <img className="user-avatar" src={loginInfo.imgUrl} alt="" />
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
