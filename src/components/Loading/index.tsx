/*
 * @Author: your name
 * @Date: 2021-08-20 01:04:18
 * @LastEditTime: 2021-08-20 01:13:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /webpack_demo/apps/project/src/components/Loading/index.tsx
 */
import React, {FC, ReactNode} from "react";

type Props = {
    children?: ReactNode,
    bgOpacity?: Boolean
}
const Loading:FC<Props> = ({bgOpacity= true}) => (
    <>
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
    </>
)

export default Loading;