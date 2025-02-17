import axios from 'axios'


export const postUser = (changeForm) => async (dispatch) => {
    try {
        console.log('entra al post user', changeForm)
        const response = await axios.post('http://localhost:5000/data/Users', changeForm)
        console.log('respuesta del back', response.data)

        dispatch({
            type: 'USER_CREATE_SUCCES',
            payload: response.data
        })
    } catch (error) {
        console.log('error al crear al usuario', error)
    }
}

