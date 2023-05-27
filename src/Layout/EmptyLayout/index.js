import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout';
import React from 'react'

import './EmptyLayout.scss';

const EmptyLayout = (props) => {
    const { children } = props;
    return (
        <Layout className="empty-layout">
            <Content className='content'>
                { children }
            </Content>
        </Layout>
    )
}

export default EmptyLayout