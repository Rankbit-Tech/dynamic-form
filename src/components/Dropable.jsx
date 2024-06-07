import React from 'react'
import { useDroppable } from '@dnd-kit/core';
import useForm from '../store/useForm';
import { cn } from '../utils';
import RenderField from './RenderField';

const Dropable = () => {

    const { fields, sections } = useForm(state => state)

    const { isOver, setNodeRef } = useDroppable({
        id: 'droppable',
        data: {
            type: "TextFields"
        }
    });

    return (
        <div className='flex justify-center w-[90%] h-[90%] lg:h-[90%] lg:w-[90%]'>
            <div ref={setNodeRef} className={cn('dropable-area w-[90%] h-full', {
                'bg-gray-200': isOver
            })}>
                {
                    fields.length ? (
                        <div>
                            {fields.map(field => {
                                return (!field.sectionId ? <RenderField key={field.type} field={field} /> : null)
                            })}
                        </div>
                    ) : (<div className='placeholder flex justify-center items-center'>Drag items here</div>)
                }

            </div>
        </div>
    )
}

export default Dropable