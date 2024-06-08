import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

const useForm = create(
    devtools(
        immer(set => ({
            fields: [],
            selectedElement: null,
            setFields: (updateFunc) => {
                set(state => {
                    state.fields = updateFunc(state.fields);
                });
            },
            setSelected: data => {
                set(state => {
                    state.selectedElement = data
                });
            },
            updateAttributes: (id, value, key) => {
                set(state => {
                    const index = state.fields.findIndex(field => field.id == id);
                    state.fields[index].extraAttributes[key] = value;
                })
            },
            updateSectionName: (id, value) => {
                set(state => {
                    const index = state.fields.findIndex(section => section.id == id);
                    state.fields[index].title = value;
                })

            }
        })),
    ),
);

export default useForm;