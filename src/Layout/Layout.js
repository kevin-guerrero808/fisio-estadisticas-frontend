import { Layout } from 'antd';
import React, { useState } from 'react';
import { MenuSlider } from '../components/MenuSlider/MenuSlider';

export const AppLayout = props => {
    const { children } = props;
	const { menuCollapsed, setMenuCollapsed } = useState(false);
    return (
        <Layout>
            <h1>Header</h1>
            <MenuSlider menuCollapsed={menuCollapsed}></MenuSlider>
            {children}
            <h2>Footer</h2>
        </Layout>
    );
};
