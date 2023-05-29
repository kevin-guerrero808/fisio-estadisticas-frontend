import { UserOutlined } from '@ant-design/icons'
import { BarChartOutlined, FormOutlined, WalletOutlined, MenuOutlined } from '@ant-design/icons/lib/icons'
import { Layout, Menu, MenuItemProps } from 'antd'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import './MenuSlider.scss'

export const MenuSlider = (props) => {
    const menuItems = [
        {
            key: '/',
            icon: BarChartOutlined,
            label: 'Indicadores'
        },
        {
            key: '/admin/users',
            icon: UserOutlined,
            label: 'Usuarios',
            children: [
                {
                    subKey: '/admin/users/list',
                    subLabel: 'Usuarios'
                },
                {
                    subKey: '/admin/users/create',
                    subLabel: 'Crear Usuario'
                }
            ]
        },
        {
            key: '/admin/form',
            icon: FormOutlined,
            label: 'Formulario'
        },
        {
            key: '/admin/menu/create',
            icon: MenuOutlined,
            label: 'Menu'
        }
    ];
    const { Sider } = Layout;
    const location = useLocation();
    const navigate = useNavigate();
    const navigateTo = (e) => {
        const path = e.key;
        navigate(path);
    }

    const items2 = menuItems.map(({key, icon, label, children}, index) => {
        return {
          key: `${key}`,
          icon: React.createElement(icon),
          label: label,
          children: children ? children.map(({subKey, subLabel}, index) => {
            return {
              key: subKey,
              label: subLabel,
            };
          }) : null
        };
      });

    return (
        <div className="menu-slider_container">
            <h3 className="menu-slider_title">Menu</h3>
            <Menu 
                className='menu-slider_menu'
                theme="aliceblue" 
                mode="inline"
                onClick={navigateTo}
                defaultSelectedKeys={location.pathname}
                items={items2}
            >
            </Menu>
        </div>
    )
}
