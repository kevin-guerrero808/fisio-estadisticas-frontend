import { Button, Card, Form, Input, Layout, notification } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React from 'react';


import './Login.scss';
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './login.validator';
import { useNavigate } from 'react-router-dom';
import localStorageService from '../../services/sessionStorate.service';

import AuthService from '../../services/auth.service';

const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
};

const Login = () => {
    const navigate = useNavigate();
    const [api, contextHolder] = notification.useNotification();
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        validateOnBlur: false,

        onSubmit: (formValue) => {
            AuthService.login(formValue)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw Error();
                }
            })
            .then(response => {
                localStorageService.saveToken(response);
                navigate("/");
            })
            .catch((err) => {
                console.log('pass');
                api['error']({
                    message: 'Error',
                    description:
                      'Hubo un error al logearse, Por favor intentalo de nuevo o comuniquese con el profesor',
                });
            });
        }
    })
    const handleSubmit = () => {
        console.log('handle submit')
    }
    const [form] = Form.useForm();
    return (
        <Layout>
            {contextHolder}
            <Content className="login">
                <section className='login_introduction'>
                    <h1 className='login_title'>
                        Indfi APP
                    </h1>
                    <p className="login_intro">Manten la información al día para tener reportes precisos</p>
                    <img src='./assets/images/logos/logo-uam-vertical.svg'/>
                </section>
                <section className='login_form'>
                    <Card className='login_form_card'>
                        <h3 className='login_form_title'>Login</h3>
                        <p className='login_form_intro'>Ingresa tus datos de usuario para continuar</p>
                        <Form form={form} name="dynamic_rule"
                            onFinish={formik.handleSubmit}
                            layout="vertical">
                            <Form.Item>
                                <Input placeholder='Correo'
                                    id="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}/>
                                { formik.errors.email && (
                                    <div className="ant-form-item-explain ant-form-item-explain-connected css-w8mnev" role="alert">
                                        <div className="ant-form-item-explain-error">{formik.errors.email}</div>
                                    </div>
                                ) }
                            </Form.Item>
                            <Form.Item>
                                <Input placeholder='Contraseña'
                                    id="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}/>
                                { formik.errors.password && (
                                    <div className="ant-form-item-explain ant-form-item-explain-connected css-w8mnev" role="alert">
                                        <div className="ant-form-item-explain-error">formik.errors.password</div>
                                    </div>
                                ) }
                            </Form.Item>
                            {/* <Form.Item>
                                <a className="login_form_forgot" href="">Olvide mi contraseña</a>
                            </Form.Item> */}
                            <Button className="login_button" type="primary" htmlType="submit">Ingresar</Button>
                        </Form>
                    </Card>
                </section>
                
            </Content>
        </Layout>
    )
}

export default Login