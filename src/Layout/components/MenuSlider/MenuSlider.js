import { UserOutlined } from '@ant-design/icons'
import { BarChartOutlined, FormOutlined, WalletOutlined } from '@ant-design/icons/lib/icons'
import { Layout, Menu } from 'antd'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import './MenuSlider.scss'

export const MenuSlider = (props) => {
    const menuItems = [
        {
            key: '/',
            icon: <BarChartOutlined />,
            label: <span className='nav-text'>Indicadores</span>
        },
        {
            key: '/admin/users/list',
            icon: <UserOutlined />,
            label: <span className='nav-text'>Usuarios</span>
        },
        {
            key: '/admin/form',
            icon: <FormOutlined />,
            label: <span className='nav-text'>Formulario</span>
        }
    ];
    const { Sider } = Layout;
    const location = useLocation();
    const navigate = useNavigate();
    const navigateTo = (e) => {
        const path = e.key;
        navigate(path);
    }
    const itemRender = (item, index) => {
        const { icon, label } = item;
        const isSelected = location.pathname === item.key;
        return (
            <Menu.Item
                style={{paddingLeft: '14px'}}
                key={item.key}
                icon={icon}
                className={
                    isSelected ? 'ant-menu-item ant-menu-item-selected' : 'ant-menu-item'
                }
            >
                {label}
            </Menu.Item>
        )
    }
    

    return (
        <div className="menu-slider_container">
            <h3 className="menu-slider_title">Menu</h3>
            <Menu 
                className='menu-slider_menu'
                theme="aliceblue" 
                mode="inline"
                onClick={navigateTo}
                defaultSelectedKeys={location.pathname}
                items={menuItems}
            >
            </Menu>
        </div>
    )
}
