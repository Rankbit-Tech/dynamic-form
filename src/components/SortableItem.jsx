import React, { memo, useMemo } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import RenderField from './RenderField';
import { GripVertical } from 'lucide-react';

const SortableItem = ({ id, field }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id });

    const style = useMemo(() => ({ transform: CSS.Transform.toString(transform), transition }), [transform, transition])

    return (
        <div className='flex items-center w-full' ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <div className='w-full'>
                <RenderField field={field} />
            </div>
            <div>
                <GripVertical className='text-gray-500' />
            </div>
        </div>
    );
};

export default memo(SortableItem);
