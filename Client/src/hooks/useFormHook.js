import { useState } from "react"



export const useFormHook = (initialForm) => {
    

    const [changeForm, setChangeForm] = useState(initialForm)

  
    const handlerChange = ({target}) => {
        const {name, value} = target
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
