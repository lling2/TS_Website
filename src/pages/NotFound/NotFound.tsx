import React, { FC } from "react";
import './NotFound.css'

const NotFound:FC<{}> = () => {
  let page404 = () => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js`;
    script.setAttribute("homePageUrl", "/");
    script.setAttribute("homePageName", "返回首页");
    document.getElementsByTagName("head")[0].appendChild(script);
  };
  page404();
  return <></>;
};

export default NotFound;
