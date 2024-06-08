import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import TextInput from './Input';

const DraggableTextInput = ({ input }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useDraggable({
        id: input.id,
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <TextInput input={input} />
        </div>
    );
};

export default DraggableTextInput;
