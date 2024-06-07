import { inputType } from './index'

export const inputSchema = [
    {
        type: inputType.TEXTFIELD,
        name: '',
        title: "input",
        icon: 'H1',
        extraAttributes: {
            label: '',
            helperText: '',
            required: false,
            placeholder: ''
        }
    },
    {
        type: inputType.SECTION,
        title: "Section",
        icon: "S",
    }
]