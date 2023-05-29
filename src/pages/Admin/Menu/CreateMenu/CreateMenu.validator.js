import * as yup from 'yup';

export const initialValues = () => {
    return {
        label: '',
        path: '',
        icon: '',
        order: '',
        department: '',
        municipality: ''
    }
}

export function validationSchema() {
    return yup.object({
        label: yup.string().required('El label es requerido'),
        path: yup.string().required('El path es requerido'),
        icon: yup.string().required('El icono es requerido'),
        order: yup.string().required('El orden es requerido'),
        department: yup.string().required('El departamento es requerido'),
        municipality: yup.string().required('El municipio es requerido')
    })
}