import { createContext, useContext, useState } from "react";

const FormContext = createContext(null)

const FormProvider = ({ children }) => {
    const [fields, setFields] = useState([])

    const addInputIntoList = (input) => {
        setFields(prev => [...prev, input])
    }


    const updateFiels = (key, value, index) => {
        setFields(prevFields => {
            const newFields = [...prevFields];
            newFields[index] = { ...newFields[index], [key]: value };
            return newFields;
        });
    }

    const onChangeLable = (e) => {
        const { value, id } = e.target
        const index = parseInt(id, 10);
        updateFiels("label", value, index)
    }

    const onChangeName = (e) => {
        const { value, id } = e.target
        const index = parseInt(id, 10);
        updateFiels("name", value, index)
    }


    const saveForm = () => {
        const existingForm = localStorage.getItem("form")
        if(existingForm){
            const oldData = JSON.parse(existingForm)
            
        }
        localStorage.setItem("form", JSON.stringify(fields))
    }

    return (
        <FormContext.Provider value={{ fields, addInputIntoList, onChangeLable, saveForm, onChangeName }}>
            {children}
        </FormContext.Provider>
    )
}
export const useCustomForm = () => {
    return useContext(FormContext)
}
export default FormProvider;


