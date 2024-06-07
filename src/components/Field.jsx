import React from 'react'
import { useDraggable } from '@dnd-kit/core';
import { nanoid } from 'nanoid';

const Field = ({ schema, id }) => {
    const { icon, title, name } = schema

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id,
        type: schema.type,
        data: {
            id,
            ...schema
        }
    });
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <div ref={setNodeRef} {...listeners} {...attributes} style={style} className="bg-gray-800 select-none p-4 rounded text-white mb-4 cursor-pointer flex items-center ">
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                <span className="font-bold">{icon}</span>
            </div>
            <div>{title}</div>
        </div>
    )
}

export default Field