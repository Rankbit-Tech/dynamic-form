import React from 'react';
import useForm from '../store/useForm';

const useDrag = () => {
    const { setFields } = useForm(state => state);

    const onHandleDragEnd = (event) => {
        const { active, over } = event;

        if (!active || !over) return;

        if (active.id == over.id) return

        const activeData = active.data.current;
        const overData = over.data.current;

        const insertAtIndex = (fields, item, index) => {
            return [...fields.slice(0, index), item, ...fields.slice(index)];
        };

        setFields((fields) => {
            const oldIndex = fields.findIndex(field => field.id === active.id);

            // Determine the target index based on the drop position
            let targetIndex;
            let targetSectionId = overData.sectionId || null;

            if (over.id.startsWith('textField-')) {
                const position = overData.position;
                const overIndex = fields.findIndex(field => field.id === overData.id);

                if (position === 'top') {
                    targetIndex = overIndex;
                } else if (position === 'bottom') {
                    targetIndex = overIndex + 1;
                }
            } else if (over.id.startsWith('section-')) {
                targetSectionId = overData.id;
                targetIndex = fields.length;
            } else {
                targetIndex = fields.findIndex(field => field.id === over.id);
            }

            if (over.id === 'droppable') {
                targetSectionId = null;
            }

            // Handle insertion at the calculated target index
            if (oldIndex === -1) {
                // Item does not exist in fields, add it at the new index
                const newItem = { ...activeData, sectionId: targetSectionId };
                return insertAtIndex(fields, newItem, targetIndex);
            } else {
                // Item exists, move it to the new index
                const updatedFields = [...fields];
                const [movedItem] = updatedFields.splice(oldIndex, 1);
                movedItem.sectionId = targetSectionId;
                updatedFields.splice(targetIndex, 0, movedItem);
                return updatedFields;
            }
        });
    };

    return {
        onHandleDragEnd,
    };
};

export default useDrag;
