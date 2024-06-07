import { createContext, useContext, useState } from "react";

const FormContext = createContext(null)

export const useCustomForm = () => {
    return useContext(FormContext)
}

const FormProvider = ({ children }) => {
    const [fields, setFields] = useState(null)
    return (
        <FormContext.Provider value={{ fields }}>
            {children}
        </FormContext.Provider>
    )
}

export default FormProvider;


