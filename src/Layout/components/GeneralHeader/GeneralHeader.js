import React, { useEffect, useState } from 'react'

import './GeneralHeader.scss'
import { Avatar, Button, notification } from 'antd'
import { MenuFoldOutlined, MenuOutlined } from '@ant-design/icons';
import usersService from '../../../services/users.service';

const GeneralHeader = (props) => {
  const { menuCollapsed, setMenuCollapsed } = props;
  const [api, contextHolder] = notification.useNotification();
  let [user, setUser] = useState(null);
  useEffect(() => {
    usersService.getMe()
    .then((response) => {
      setUser(response);
      console.log(response);
    })
    .catch((error) => {
      api['error']({
        message: 'Error',
        description:
          'Error para obtener la información del usuario',
      });
    })
  }, [])
  return (
    <div className='general-header'>
      {contextHolder}
      <Button  type='link' onClick={() => setMenuCollapsed(!menuCollapsed)}> {menuCollapsed ? <MenuOutlined /> : <MenuFoldOutlined /> }</Button>
      <span className='general-header_logo'>Indfi </span>
      <span className="general-header_user">
        <span className='general-header_user_name'>{ user && user.firstName }</span>
        <span className='general-header_user_avatar'>
          <Avatar style={{

          }}>{user && `${user.firstName[0]}`.toUpperCase()}</Avatar>
        </span>
      </span>
    </div>
  )
}

export default GeneralHeader