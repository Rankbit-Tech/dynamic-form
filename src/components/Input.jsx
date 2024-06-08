import { Input } from 'antd';
import React from 'react';
import useForm from '../store/useForm';
import { useDroppable } from '@dnd-kit/core';
import { inputType } from '../constants';
import { cn } from '../utils';

const TextInput = ({ input }) => {
    const { setSelected } = useForm(state => state);
    const { extraAttributes } = input;

    const { isOver: isOverTop, setNodeRef: setTopNodeRef } = useDroppable({
        id: `textField-top-${input.id}`,
        data: {
            id: input.id,
            type: inputType.TEXTFIELD,
            position: 'top',
            sectionId: input.sectionId,
        },
    });

    const { isOver: isOverBottom, setNodeRef: setBottomNodeRef } = useDroppable({
        id: `textField-bottom-${input.id}`,
        data: {
            id: input.id,
            type: inputType.TEXTFIELD,
            position: 'bottom',
            sectionId: input.sectionId,
        },
    });

    const handleSelected = (e) => {
        e.stopPropagation();
        setSelected(input);
    };

    return (
        <div className="my-1 rounded cursor-pointer">

            {/* top half */}
            <div ref={setTopNodeRef} className={cn('w-full h-3 rounded-t', {
                'bg-gray-400': isOverTop,
            })} />

            <div className={cn('w-full', {
                'bg-gray-200': isOverBottom || isOverTop
            })} onClick={handleSelected}>
                <label className="text-muted text-sm">{extraAttributes.label || ''}</label>
                <Input onFocus={handleSelected} placeholder={extraAttributes.placeholder} />
                <span className="text-muted text-xs text-red-500">{extraAttributes.helperText || ''}</span>
            </div>

            {/* bottom half */}
            <div ref={setBottomNodeRef} className={cn('w-full h-3 rounded-b', {
                'bg-gray-400': isOverBottom,
            })} />
        </div>
    );
};

export default TextInput;
