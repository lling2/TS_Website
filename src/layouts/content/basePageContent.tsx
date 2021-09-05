import React from 'react';
import p from 'prop-types'
import classnames from 'classnames'
// import { Divider } from 'antd'
import PageHeaderDesc from '@/components/PageHeaderDesc'
import styles from './PageContentLayout.less'

class PageContentLayout extends PureComponent {
  render () {
    const { title, subTitle, children, ...res } = this.props
    return (
      <PageHeaderDesc>
        <PageHeaderDesc
          title={title}
          subTitle={subTitle}
          {...res}
        />
        <Divider />
        <div className={classnames(styles.content)}>
          {children}
        </div>
      </PageHeaderDesc>
    )
  }
}

PageContentLayout.protoTypes = {
  title: p.string.isRequired,
  subTitle: p.string
}

export default PageContentLayout
