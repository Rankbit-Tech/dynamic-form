import React from 'react'
import { Checkbox, Input } from 'antd'
import useForm from '../store/useForm'


const PropertySettings = () => {
    const { selectedElement, updateAttributes } = useForm(state => state)

    const handleLabelChange = (e) => {
        const { value, name } = e.target
        updateAttributes(selectedElement.id, value, name)
    }
    const handleCheckBox = (e) => {
        const { checked, name } = e.target
        updateAttributes(selectedElement.id, checked, name)

    }
    return (
        <div>
            <h3 className="text-lg font-semibold text-gray-600">Change Property</h3>
            <div className='h-[1px] w-full bg-gray-200 my-2' />
            <div className='mb-2'>
                <label className=' text-gray-600 text-sm font-semibold'>Enter Label</label>
                <Input name='label' onChange={handleLabelChange} />
            </div >
            <div className='mb-2'>
                <label className='text-muted text-gray-600 text-sm font-semibold'>Enter placeholder</label>
                <Input name='placeholder' onChange={handleLabelChange} />
            </div>
            <div className='mb-2'>
                <label className='text-muted text-gray-600 text-sm font-semibold'>Enter name</label>
                <Input name='name' onChange={handleLabelChange} />
            </div>
            <div className='mb-2'>
                <label className='text-muted text-gray-600 text-sm font-semibold'>Helper Text (Error message)</label>
                <Input name='helperText' onChange={handleLabelChange} />
            </div>
            <div className='mb-2'>
                <span>Required : </span><Checkbox name="required" onChange={handleCheckBox} />
            </div>
        </div >
    )
}

export default PropertySettings