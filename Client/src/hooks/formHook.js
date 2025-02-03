import { useState } from "react"


export const formHook = (InitialForm) => {
    
    const [changeForm, setChangeForm] = useState(InitialForm)

  
    const handlerChange = ({target}) => {
        const {name, value} = target
        // if(name == password) {
        //     const encripte = EncriptarContraseña(value)
        //     setChangeForm({
        //         ...changeForm,
        //         [name] : encripte
        //     })
        // }
        setChangeForm({
            ...changeForm,
            [name] : value
        })
    }
    


    return {
        ...changeForm,
        changeForm,
        handlerChange
    }
}
