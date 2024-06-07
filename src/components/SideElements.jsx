
import React from 'react';
import Field from './Field';
import { inputSchema } from "../constants/Schema"
import { nanoid } from 'nanoid';

const SideElements = () => {
    return (
        <div className="p-4 grid grid-cols-2 gap-2">
            {
                inputSchema.map(schema => {
                    return (
                        <Field key={schema.type} id={nanoid()} schema={schema} />
                    )
                })
            }
        </div>
    );
};

export default SideElements;
