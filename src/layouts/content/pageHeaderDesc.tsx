import React, { FC, memo } from 'react'
import p from 'prop-types'
import classnames from 'classnames'
import { PageHeader } from 'antd'
import styles from '@/components/PageHeaderDesc.less'

const PageHeaderDesc: FC<{}> = () => 111

// class PageHeaderDesc extends PureComponent {
//   render () {
//     const { title, subTitle, ...res } = this.props
//     return (
//       <PageHeader
//         className={classnames(styles.page_header)}
//         title={title}
//         subTitle={subTitle}
//         {...res}
//       />
//     )
//   }
// }

// PageHeaderDesc.protoTypes = {
//   title: p.string.isRequired,
//   subTitle: p.string
// }

// PageHeaderDesc.defaultProps = {
//   title: '',
//   subTitle: ''
// }

export default memo(PageHeaderDesc)