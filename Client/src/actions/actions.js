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

export const loginUser = (changeForm, login, navigate) => async (dispatch) => {



    try {
        console.log('entre al get user', changeForm)
        const response = await axios.post('http://localhost:5000/data/Users/login', changeForm)
        console.log('respuesta del back de login', response.data)



        if (response.data.token) {
            console.log("token recivido", response.data.token)

            localStorage.setItem("token", response.data.token)
            login(response.data.token)

            console.log("ahora redirije al home")
            navigate("/home", { replace: true }); // 🔹 Usa replace: true para evitar bucles


            dispatch({
                type: "USER_LOGIN",
                payload: response.data
            })
        } else {
            alert("Credenciales incorrectas")
        }

    } catch (error) {
        console.log('error al entrar con el usuario', error)
    }
}
