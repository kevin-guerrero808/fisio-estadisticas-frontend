import React from 'react'

import './GeneralHeader.scss'
import { Avatar, Button } from 'antd'
import { MenuFoldOutlined, MenuOutlined } from '@ant-design/icons';

const GeneralHeader = (props) => {
  const { menuCollapsed, setMenuCollapsed } = props;
  return (
    <div className='general-header'>
      <Button  type='link' onClick={() => setMenuCollapsed(!menuCollapsed)}> {menuCollapsed ? <MenuOutlined /> : <MenuFoldOutlined /> }</Button>
      <span className='general-header_logo'>Indfi</span>
      <span className="general-header_user">
        <span className='general-header_user_name'>Kevin Guerrero</span>
        <span className='general-header_user_avatar'>
          <Avatar style={{

          }}>KG</Avatar>
        </span>
      </span>
    </div>
  )
}

export default GeneralHeader