import { useState } from "react"



export const useFormHook = (initialForm) => {
    
    console.log(initialForm)

    const [changeForm, setChangeForm] = useState(initialForm)

    console.log(changeForm)

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
