import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import { Button, Card, Form, Input, Select, notification } from 'antd';
import { initialValues, validationSchema } from './CreateUser.validator';

import ColombiaOpenDataResourcesService from '../../../../services/colombiaOpenDataResources.service';

import './CreateUser.scss';
import { CaretDownFilled } from '@ant-design/icons';
import usersService from '../../../../services/users.service';
import { useParams } from 'react-router-dom';

export default function CreateUser() {
  const { id } = useParams();
  const [departments, setDepartments] = useState([])
  const [municipalitiesByDepartments, setMunicipalitiesByDepartments] = useState([]);
  const [municipalities, setMunicipalities] = useState([]);
  const [api, contextHolder] = notification.useNotification();

  const filterDepartments = (response) => {
    const departmentsSet = new Set([]);
    response.forEach(element => {
      departmentsSet.add(element.departamento);
    });
    const departmentsArray = [...departmentsSet];
    setDepartments(departmentsArray)
  }

  const manageUserInformation = (user) => {
    formik.setFieldValue('firstName', user.firstName);
    formik.setFieldValue('lastName', user.lastName);
    formik.setFieldValue('email', user.email);
    formik.setFieldValue('password', user.password);
    formik.setFieldValue('department', user.department);
    formik.setFieldValue('municipality', user.municipality);
  }

  const cleanUserInformation = (user) => {
    formik.setFieldValue('firstName', '');
    formik.setFieldValue('lastName', '');
    formik.setFieldValue('email', '');
    formik.setFieldValue('password', '');
    formik.setFieldValue('department', '');
    formik.setFieldValue('municipality', '');
  }

  const fillUserFields = (id) => {
    usersService.getUser(id)
    .then((response) => {
      manageUserInformation(response);
    })
    .catch((err) => {
        api['error']({
            message: 'Error',
            description:
              'Error on the server, load again',
        });
    });
  }

  useEffect(() => {
    if (id) {
      fillUserFields(id);
    } else {
      cleanUserInformation();
    }
    ColombiaOpenDataResourcesService.getMunicipalities()
    .then((response) => {
      filterDepartments(response);
      setMunicipalities(response);
    })
    .catch((err) => {
        api['error']({
            message: 'Error',
            description:
              'Error on the server, load again',
        });
    });
  }, [id])

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    validateOnBlur: false,

    onSubmit: (formValue) => {
      console.log(formValue)
      usersService.createUser(formValue)
      .then((response) => {
        api['success']({
            message: 'Usuario agregado',
            description:
              'El usuario ha sido creado, revisar el correo registrado',
        });
      })
      .catch((err) => {
        console.log('pass');
        api['error']({
          message: 'Error',
          description:
            'Hubo un error al crear el usuario, intente nuevamente',
        });
      });
    }
  })
  const onDeparmentChange = (department) => {
    const municipalitiesByDepartmentsFilter = municipalities.filter((municipality => municipality.departamento === department))
    setMunicipalitiesByDepartments(municipalitiesByDepartmentsFilter);
  }
  const [form] = Form.useForm();
  return (
    <>
      { contextHolder }
      <h1 className="title1">Nuevo usuario</h1>
      <Card className='create-user_card'>
        <Form layout="vertical"
          onFinish={formik.handleSubmit}>
          <fieldset>
            <Form.Item
              label='Nombre'>
              <Input 
                id="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}/>
              { formik.errors.firstName && (
                  <div className="ant-form-item-explain ant-form-item-explain-connected css-w8mnev" role="alert">
                      <div className="ant-form-item-explain-error">{formik.errors.lastName}</div>
                  </div>
              ) }
            </Form.Item>
            <Form.Item
              label='Apellido'>
              <Input
                id="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}/>
                { formik.errors.lastName && (
                    <div className="ant-form-item-explain ant-form-item-explain-connected css-w8mnev" role="alert">
                        <div className="ant-form-item-explain-error">{formik.errors.lastName}</div>
                    </div>
                ) }
            </Form.Item>
            <Form.Item
              label='Correo'>
              <Input
                  id="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}/>
              { formik.errors.email && (
                  <div className="ant-form-item-explain ant-form-item-explain-connected css-w8mnev" role="alert">
                      <div className="ant-form-item-explain-error">{formik.errors.email}</div>
                  </div>
              ) }
            </Form.Item>
            { !id && (<Form.Item
              label='Contraseña'>
              <Input
                  id="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}/>
              { formik.errors.password && (
                  <div className="ant-form-item-explain ant-form-item-explain-connected css-w8mnev" role="alert">
                      <div className="ant-form-item-explain-error">{formik.errors.password}</div>
                  </div>
              ) }
            </Form.Item>
            )}
            <Form.Item label="Departamento">
              <Select
                id='department'
                onChange={(value) => { onDeparmentChange(value); formik.setFieldValue('department', value) }}
                onBlur={formik.handleBlur}
                value={formik.values.department}>
                { departments.map(department => (
                  <Select.Option value={department} key={department}>{ department }</Select.Option>
                ))}
              </Select>
              { formik.errors.department && (
                  <div className="ant-form-item-explain ant-form-item-explain-connected css-w8mnev" role="alert">
                      <div className="ant-form-item-explain-error">{formik.errors.department}</div>
                  </div>
              ) }
            </Form.Item>
            <Form.Item label="Municipio">
              <Select
                id='municipality'
                onChange={ (value) => { formik.setFieldValue('municipality', value) } }
                onBlur={formik.handleBlur}
                value={formik.values.municipality}
                >
                { municipalitiesByDepartments.map(municipality => (
                  <Select.Option 
                    value={municipality.municipio} 
                    key={municipality.municipio}
                    onChange={formik.handleChange}
                  onBlur={formik.handleBlur}>{ municipality.municipio }</Select.Option>
                ))}
                {/* <CaretDownFilled /> */}
              </Select>
              { formik.errors.municipality && (
                  <div className="ant-form-item-explain ant-form-item-explain-connected css-w8mnev" role="alert">
                      <div className="ant-form-item-explain-error">{formik.errors.municipality}</div>
                  </div>
              ) }
            </Form.Item>
            <div className='create-user_actions'>
              <Button type="primary create-user_button" htmlType="submit">Crear</Button>
            </div>
          </fieldset>
        </Form>
      </Card>
    </>
  )
}