import { inputType } from "../constants";

export const transformData = (data) => {

    const createObject = (item) => {
        switch (item.type) {
            case inputType.SECTION:
                return {
                    id: item.id,
                    type: inputType.SECTION,
                    title: item.title,
                    children: findChildren(item.id)
                };
            case inputType.TEXTFIELD:
            case inputType.CHECKBOX:
            case inputType.RADIO:
                return {
                    id: item.id,
                    type: item.type,
                    extraAttributes: item.extraAttributes
                };
            default:
                return null;
        }
    };

    const findChildren = (id) => {
        return data
            .filter(item => item.sectionId === id)
            .map(item => createObject(item))
            .filter(Boolean);
    };

    return data
        .filter(item => !item.sectionId)
        .map(item => createObject(item))
        .filter(Boolean);
}