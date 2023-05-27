import * as yup from 'yup';

export const initialValues = () => {
    return {
        email: 'asdf',
        password: ''
    }
}

export function validationSchema() {
    return yup.object({
        email: yup.string().email('No es un email valido').required('El email es requerido'),
        password: yup.string().required('El password es requerido')
    })
}