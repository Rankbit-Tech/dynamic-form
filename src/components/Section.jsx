import { useDroppable } from '@dnd-kit/core';
import { Card, Input } from 'antd'
import React from 'react'
import { inputType } from '../constants';
import useForm from '../store/useForm';
import RenderField from './RenderField';
import { cn } from '../utils';

const Section = ({ input }) => {
    const { fields, updateSectionName } = useForm(state => state)
    const { isOver, setNodeRef } = useDroppable({
        id: `section-${input.id}`,
        data: {
            id: input.id,
            type: inputType.SECTION
        }
    });

    const filteredFields = fields.filter(field => field.sectionId == input.id)

    const handleChangeSectionTitle = (e) => {
        const { value } = e.target
        updateSectionName(input.id, value)
    }

    return (
        <Card ref={setNodeRef} className={cn('mb-2 shadow-md ', {
            'bg-gray-200': isOver
        })} title={<Input value={input.title} name="title" className='border-0' onChange={handleChangeSectionTitle} />}>
            {
                filteredFields?.map(field => {
                    return (
                        <RenderField key={field.type} field={field} />
                    )
                })
            }
        </Card>
    )
}

export default Section