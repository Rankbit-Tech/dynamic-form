import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { transformData } from '../utils/transform';

const useForm = create(
    devtools(
        immer((set, get) => ({
            fields: [],
            isPreview: false,
            setPreview: (data) => {
                set(state => {
                    state.isPreview = data
                })
            },
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

            },
            formData: () => {
                get(state => {
                    return transformData(state.fields)
                })
            }
        })),
    ),
);

export default useForm;