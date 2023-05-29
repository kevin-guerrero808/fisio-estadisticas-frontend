import * as yup from 'yup';

export const initialValues = () => {
    return {
        consultationDate: '',
        interventionDay: '',
        practice: '',
        teacherName: '',
        studentName: '',
        activityType: ''
    }
}

export function validationSchema() {
    return yup.object({
        consultationDate: yup.string().required('La fecha de la consulta es requerida'),
        interventionDay: yup.string().required('El día de la intervención es requerido'),
        practice: yup.string().required('El nombre de la practica es requerido'),
        teacherName: yup.string().required('El nombre del docente es requerido'),
        studentName: yup.string().required('El nombre del estudiante es requerido'),
        activityType: yup.string().required('El tipo de actividad es requerido')
    })
}