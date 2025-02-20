import { useState } from "react"



export const useFormHook = (initialForm) => {
    
    const [changeForm, setChangeForm] = useState(initialForm)

    const handlerChange = ({target}) => {
        const {name, value} = target
        setChangeForm((prevForm) => ({
            ...prevForm,
            [name] : value
        }))
    }
    


    return {
        changeForm,
        handlerChange
    }
}
