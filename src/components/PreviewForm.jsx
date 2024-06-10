import React from 'react';
import { Form, Input, Collapse } from 'antd';
import { inputType } from '../constants';

const { Panel } = Collapse;

const PreviewForm = ({ formData }) => {
    console.log(formData)
    if (!formData.length) return null
    const renderTextField = (field) => (
        <Form.Item
            key={field.id}
            label={field.extraAttributes.label}
            name={field.extraAttributes.name}
            rules={[
                { required: field.extraAttributes.required, message: field.extraAttributes.helperText }
            ]}
        >
            <Input className="h-full" placeholder={field.extraAttributes.placeholder} />
        </Form.Item>
    );

    const renderSection = (section) => (
        <Collapse key={section.id} defaultActiveKey={['1']}>
            <Panel header={section.title} key="1">
                <div className="flex flex-col ">
                    {section.children.map(renderTextField)}
                </div>
            </Panel>
        </Collapse>
    );

    return (
        <>
            {formData?.map(item => {
                if (item.type === inputType.TEXTFIELD) {
                    return renderTextField(item);
                } else if (item.type === inputType.SECTION) {
                    return renderSection(item);
                }
                return null;
            })}

        </>
    );
};

export default PreviewForm
