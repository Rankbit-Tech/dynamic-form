import { Input } from 'antd'
import React from 'react'
import useForm from '../store/useForm'

const TextInput = ({ input }) => {

    const { setSelected } = useForm(state => state)
    const { extraAttributes } = input

    const handleSelected = (e) => {
        e.stopPropagation()
        setSelected(input)
    }

    return (
        <div onClick={handleSelected} className='bg-gray-200 px-2 py-2 my-2 rounded cursor-pointer hover:bg-gray-300'>
            <label className='text-muted text-sm'>{extraAttributes.label || ""}</label>
            <Input placeholder={extraAttributes.placeholder} />
            <span className='text-muted text-xs  text-red-500'>{extraAttributes.helperText || ""} </span>
        </div>
    )
}

export default TextInput