import * as yup from 'yup';

export const initialValues = () => {
    return {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        department: '',
        municipality: ''
    }
}

export function validationSchema() {
    return yup.object({
        firstName: yup.string().required('El nombre es requerido'),
        lastName: yup.string().required('El apellido es requerido'),
        email: yup.string().email('No es un correo valido').required('El correo es requerido'),
        password: yup.string().required('La constraseña es requerida'),
        department: yup.string().required('El departamento es requerido'),
        municipality: yup.string().required('El municipio es requerido')
    })
}