import React from 'react'
import { useDroppable } from '@dnd-kit/core';
import { rectSortingStrategy, SortableContext } from '@dnd-kit/sortable';
import useForm from '../store/useForm';
import { cn } from '../utils';
import SortableItem from './SortableItem';

const Dropable = () => {

    const { fields } = useForm(state => state)

    const { isOver, setNodeRef } = useDroppable({
        id: 'droppable',
        data: {
            type: "TextFields"
        }
    });

    return (
        <SortableContext items={fields} strategy={rectSortingStrategy}>
            <div className='flex justify-center w-[90%] h-[90%] lg:h-[90%] lg:w-[90%]'>
                <div ref={setNodeRef} className={cn('dropable-area w-[90%] h-full', {
                    'bg-gray-200': isOver
                })}>
                    {
                        fields.length ? (
                            <div>
                                {fields?.map(field => {
                                    return (!field?.sectionId ? <SortableItem id={field.id} key={field.id} field={field} /> : null)
                                })}
                            </div>
                        ) : (<div className='placeholder flex justify-center items-center'>Drag items here</div>)
                    }

                </div>
            </div>
        </SortableContext>
    )
}

export default Dropable