import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import { Button, Card, Form, Input, Select, notification } from 'antd';
import { initialValues, validationSchema } from './CreateMenu.validator';

import ColombiaOpenDataResourcesService from '../../../../services/colombiaOpenDataResources.service';

import './CreateMenu.scss';
import { CaretDownFilled } from '@ant-design/icons';
import usersService from '../../../../services/users.service';
import { useParams } from 'react-router-dom';
import menuService from '../../../../services/menu.service';

export default function CreateUser() {
  const { id } = useParams();
  const [api, contextHolder] = notification.useNotification();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    validateOnBlur: false,

    onSubmit: (formValue) => {
      console.log(formValue)
      // create user
      if (!id) {
        menuService.createUser(formValue)
        .then((response) => {
          api['success']({
              message: 'Menu agregado',
              description:
                'El menu ha sido creado',
          });
        })
        .catch((err) => {
          console.log('pass');
          api['error']({
            message: 'Error',
            description:
              'Hubo un error al crear el menu, intente nuevamente',
          });
        });
      } 
      // edit user
      else {
        usersService.updateUser(formValue, id)
        .then((response) => {
          api['success']({
              message: 'Usuario actualizado',
              description:
                'Los datos del usuario han sido actualizados satisfactoriamente',
          });
        })
        .catch((err) => {
          console.log('pass');
          api['error']({
            message: 'Error',
            description:
              'Error al actualizar los datos del usuario',
          });
        });
      }
    }
  })
  const [form] = Form.useForm();
  return (
    <>
        <h1 className="title1">Nuevo Menu</h1>
      <Card className='create-user_card'>
        <Form layout="vertical"
          onFinish={formik.handleSubmit}>
          <fieldset>
            <Form.Item
              label='Label'>
              <Input 
                id="label"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.label}/>
              { formik.errors.label && (
                  <div className="ant-form-item-explain ant-form-item-explain-connected css-w8mnev" role="alert">
                      <div className="ant-form-item-explain-error">{formik.errors.label}</div>
                  </div>
              ) }
            </Form.Item>
            <Form.Item
              label='Path'>
              <Input
                id="path"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.path}/>
                { formik.errors.path && (
                    <div className="ant-form-item-explain ant-form-item-explain-connected css-w8mnev" role="alert">
                        <div className="ant-form-item-explain-error">{formik.errors.path}</div>
                    </div>
                ) }
            </Form.Item>
            <Form.Item
              label='Icono'>
              <Input
                id="icon"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.icon}/>
                { formik.errors.icon && (
                    <div className="ant-form-item-explain ant-form-item-explain-connected css-w8mnev" role="alert">
                        <div className="ant-form-item-explain-error">{formik.errors.icon}</div>
                    </div>
                ) }
            </Form.Item>
            <Form.Item
              label='Orden'>
              <Input
                id="order"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.order}/>
                { formik.errors.order && (
                    <div className="ant-form-item-explain ant-form-item-explain-connected css-w8mnev" role="alert">
                        <div className="ant-form-item-explain-error">{formik.errors.order}</div>
                    </div>
                ) }
            </Form.Item>
            <div className='create-user_actions'>
              <Button type="primary create-user_button" htmlType="submit">{ id ? 'Guardar' : 'Crear' }</Button>
            </div>
          </fieldset>
        </Form>
      </Card>
    </>
  )
}