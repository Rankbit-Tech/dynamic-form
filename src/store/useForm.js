import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

const useForm = create(
    devtools(
        immer(set => ({
            fields: [],
            selectedElement: null,
            setFields: data => {
                set(state => {
                    state.fields.push(data)
                });
            },
            setSelected: data => {
                set(state => {
                    state.selectedElement = data
                });
            },
            updateAttributes: (id, value, key) => {
                set(state => {
                    console.log({ id, value, key })
                    const index = state.fields.findIndex(field => field.id == id)
                    state.fields[index].extraAttributes[key] = value
                })
            }
        })),
    ),
);

export default useForm;