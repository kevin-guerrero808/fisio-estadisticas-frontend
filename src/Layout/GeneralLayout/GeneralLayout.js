import { Layout } from 'antd';
import React, { useState } from 'react';
import { MenuSlider } from '../components/MenuSlider/MenuSlider';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import GeneralHeader from '../components/GeneralHeader';

import './GeneralLayout';

export const GeneralLayout = props => {
    const { children } = props;
	const [ menuCollapsed, setMenuCollapsed ] = useState(false);
    function handleCollapsed(collapsed) {
        setMenuCollapsed(collapsed);
    }
    return (
        <Layout>
            <Header style={{backgroundColor: '#0069A3',
                height: 60,
                position: 'sticky',
                top: 0,
                zIndex: 1,
                width: '100%',
                padding: '0 30px'}}>
                    <GeneralHeader
                        menuCollapsed={menuCollapsed}
                        setMenuCollapsed={handleCollapsed}></GeneralHeader>
                </Header>
            <Layout>
                <Sider style={{backgroundColor: '#FFF',
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 60,
                    bottom: 0,}}
                    width={240}
                    collapsed={menuCollapsed}><MenuSlider></MenuSlider></Sider>
                <Content style={{
                    minHeight: 'calc(100vh - 80px - 48px)'
                }}>{children}</Content>
            </Layout>
            <Footer
                style={{
                    backgroundColor: '#0069A3',
                }}></Footer>
        </Layout>
    );
};
