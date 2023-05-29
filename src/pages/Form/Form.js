import { Form, Card, Radio, Space, Input, Select, DatePicker } from 'antd'
import React, { useState } from 'react'
import { initialValues, validationSchema } from './Form.validator';
import { useFormik } from 'formik';

import './Form.scss';

const ConsultationForm = () => {
  const [practices, setPractices] = useState(['Fisioterapia', 'Odontologia']);
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    validateOnBlur: false,

    onSubmit: (formValue) => {
      console.log(formValue)
      // formService.createForm(formValue)
      // .then((response) => {
      //   api['success']({
      //       message: 'Datos de la consulta agregados'
      //   });
      // })
      // .catch((err) => {
      //   console.log('pass');
      //   api['error']({
      //     message: 'Error',
      //     description:
      //       'Hubo un error guardar los datos de la consulta',
      //   });
      // });
    }
  })
  return (
    <>
      <h1 className="title1">Información del usuario</h1>
      <Form className='consultation-form'>
        <fieldset>
          <Card title={'*Fecha de consulta'}>
            <Form.Item>
              <DatePicker 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.consultationDate}
                placeholder={'Seleccione una fecha'}/>
              { formik.errors.consultationDate && (
                  <div className="ant-form-item-explain ant-form-item-explain-connected css-w8mnev" role="alert">
                      <div className="ant-form-item-explain-error">{formik.errors.consultationDate}</div>
                  </div>
              ) }
            </Form.Item>
          </Card>
          <Card title={'*Jornada en la que se realiza la intervesión'}>
            <Radio.Group 
              id='interventionDay'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.interventionDay}>
              <Space direction="vertical">
                <Radio value={'Mañana'}>Mañana</Radio>
                <Radio value={'Tarde'}>Tarde</Radio>
              </Space>
            </Radio.Group>
            { formik.errors.interventionDay && (
                <div className="ant-form-item-explain ant-form-item-explain-connected css-w8mnev" role="alert">
                    <div className="ant-form-item-explain-error">{formik.errors.interventionDay}</div>
                </div>
            ) }
          </Card>
          <Card title={'*Practica a cargo'}>
            <Form.Item>
              <Select
                id='practice'
                onChange={(value) => { formik.setFieldValue('practice', value) }}
                onBlur={formik.handleBlur}
                value={formik.values.practice}
                placeholder={'Seleccione una practica'}>
                { practices.map(practice => (
                  <Select.Option value={practice} key={practice}>{ practice }</Select.Option>
                ))}
              </Select>
              { formik.errors.practice && (
                  <div className="ant-form-item-explain ant-form-item-explain-connected css-w8mnev" role="alert">
                      <div className="ant-form-item-explain-error">{formik.errors.practice}</div>
                  </div>
              ) }
            </Form.Item>
          </Card>
          <Card title={'*Nombre del docente'}>
            <Form.Item>
              <Input 
                id="teacherName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.teacherName}
                placeholder={'Digite el nombre del docente'}/>
              { formik.errors.teacherName && (
                  <div className="ant-form-item-explain ant-form-item-explain-connected css-w8mnev" role="alert">
                      <div className="ant-form-item-explain-error">{formik.errors.teacherName}</div>
                  </div>
              ) }
            </Form.Item>
          </Card>
          <Card title={'*Nombre del practicante'}>
            <Form.Item>
              <Input 
                id="studentName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.studentName}
                placeholder={'Digité el nombre del estudiante'}/>
              { formik.errors.studentName && (
                  <div className="ant-form-item-explain ant-form-item-explain-connected css-w8mnev" role="alert">
                      <div className="ant-form-item-explain-error">{formik.errors.studentName}</div>
                  </div>
              ) }
            </Form.Item>
          </Card>
          <Card title={'*Tipo de actividad'}>
            <Radio.Group 
              id="activityType" 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur}
              value={formik.values.activityType}>
              <Space direction="vertical">
                <Radio value={'Grupal'}>Grupal</Radio>
                <Radio value={'Grupal'}>Individual</Radio>
              </Space>
            </Radio.Group>
            { formik.errors.activityType && (
                <div className="ant-form-item-explain ant-form-item-explain-connected css-w8mnev" role="alert">
                    <div className="ant-form-item-explain-error">{formik.errors.activityType}</div>
                </div>
            ) }
          </Card>
        </fieldset>
      </Form>
    </>
  )
}

export default ConsultationForm