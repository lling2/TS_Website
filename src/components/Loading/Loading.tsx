/*
 * @Author: your name
 * @Date: 2021-08-20 01:04:18
 * @LastEditTime: 2021-08-20 01:13:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_demo/apps/project/src/components/Loading/index.tsx
 */
import React, { FC, Fragment, ReactNode } from "react";
import "./Loading.css";

type Props = {
    children?: ReactNode,
    bgOpacity?: Boolean
}

const Loading:FC<Props> = ({bgOpacity= true}) => (
    <Fragment>
        <div className={`components-loading ${bgOpacity ? "components-loading-opacity" : ""}`}>
            <div className="loading-con">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </Fragment>
)

export default Loading;