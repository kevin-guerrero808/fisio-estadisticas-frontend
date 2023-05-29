import { Button, Card, notification } from 'antd'
import { useState, useEffect } from "react";
import UsersService from '../../../../services/users.service';
import { useNavigate } from 'react-router-dom';

import './ListUsers.scss'

const ListUsers = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [api, contextHolder] = notification.useNotification();
  useEffect(() => {
    UsersService.getAllUsers()
    .then((response) => {
      setUsers(response);
      console.log(response)
    })
    .catch((err) => {
        console.log('pass');
        api['error']({
            message: 'Error',
            description:
              'Error on the server, load again',
        });
    });
  }, [])

  const handleEdit = (id) => {
    navigate(`/admin/users/edit/${id}`);
  }
  return (
    <>
      
      {contextHolder}
      <h1 className="title1">Usuarios</h1>
      <ul className='users_list'>
        { users.map((user) => (
          <li className='users_item' key={user._id}>
            <Card className='users_card' title={user.firstName}>
              <ul className="users_card_data_list">
                <li className='users_card_data_item'>
                  <span className='users_card_data_key'>Correo:</span>
                  <span className='users_card_data_value'>{user.email}</span>
                </li>
                <li className='users_card_data_item'>
                  <span className='users_card_data_key'>Nombre:</span>
                  <span className='users_card_data_value'>{user.firstName} {user.lastName}</span>
                </li>
                {user.department && (<li className='users_card_data_item'>
                  <span className='users_card_data_key'>Departamento:</span>
                  <span className='users_card_data_value'>{user.department}</span>
                </li>)}
                {user.municipality && (<li className='users_card_data_item'>
                  <span className='users_card_data_key'>Municipio:</span>
                  <span className='users_card_data_value'>{user.municipality}</span>
                </li>)}
              </ul>
              <div className='users_card_actions'>
                <Button type="secondary" onClick={ (e) => { handleEdit(user._id, e) }}>Editar</Button>
              </div>
            </Card>
        </li>
        ))}          
      </ul>
    </>
  )
}

export default ListUsers