import React, { useEffect, useState } from 'react'
import { Checkbox, Input } from 'antd'
import useForm from '../store/useForm'
import { CrossIcon, X } from 'lucide-react'


const PropertySettings = () => {
    const { selectedElement, updateAttributes, setSelected } = useForm(state => state)

    const { extraAttributes } = selectedElement

    const [values, setValues] = useState({
        label: '',
        placeholder: '',
        name: '',
        helperText: '',
        required: false
    })


    useEffect(() => {
        setValues({
            label: extraAttributes.label,
            placeholder: extraAttributes.placeholder,
            name: extraAttributes.name,
            helperText: extraAttributes.helperText,
            required: extraAttributes.required
        })
    }, [selectedElement, extraAttributes])


    const handleChange = (e) => {
        const { value, name } = e.target
        console.log({ value })
        setValues(prev => {
            return {
                ...prev,
                [name]: value || ''
            }
        })

        updateAttributes(selectedElement.id, value, name)

    }


    const handleCheckBox = (e) => {
        const { name, checked } = e.target
        setValues(prev => {
            return {
                ...prev,
                [name]: checked
            }
        })

        updateAttributes(selectedElement.id, checked, name)

    }



    return (
        <div>
            <div className='flex justify-between items-center'>
                <h3 className="text-lg font-semibold text-gray-600">Change Property</h3>
                <X className='cursor-pointer hover:text-red-500' onClick={() => setSelected(null)} />
            </div>
            <div className='h-[1px] w-full bg-gray-200 my-2' />
            <div className='mb-2'>
                <label className=' text-gray-600 text-sm font-semibold'>Enter Label</label>
                <Input value={values.label} name='label' onChange={handleChange} />
            </div >
            <div className='mb-2'>
                <label className='text-muted text-gray-600 text-sm font-semibold'>Enter placeholder</label>
                <Input value={values.placeholder} name='placeholder' onChange={handleChange} />
            </div>
            <div className='mb-2'>
                <label className='text-muted text-gray-600 text-sm font-semibold'>Enter name</label>
                <Input value={values.name} name='name' onChange={handleChange} />
            </div>
            <div className='mb-2'>
                <label className='text-muted text-gray-600 text-sm font-semibold'>Helper Text (Error message)</label>
                <Input value={values.helperText} name='helperText' onChange={handleChange} />
            </div>
            <div className='mb-2'>
                <span>Required : </span><Checkbox checked={values.required} name="required" onChange={handleCheckBox} />
            </div>
        </div >
    )
}

export default PropertySettings