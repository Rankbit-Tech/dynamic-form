import React from 'react'
import { inputType } from '../constants'
import Section from './Section'
import TextInput from './Input'

const RenderField = ({ field }) => {
    const renderComponents = (input) => {
        const { type } = input

        switch (type) {
            case inputType.TEXTFIELD:
                return <TextInput input={input} />
            case inputType.SECTION:
                return <Section input={input} />
            default:
                return <h1>Error</h1>
        }
    }

    return (
        <div>
            {renderComponents(field)}
        </div>
    )
}

export default RenderField