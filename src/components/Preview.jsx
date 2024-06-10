import { Button, Card, Form, Input } from 'antd'
import React, { useEffect, useState } from 'react'
import useForm from '../store/useForm'
import { transformData } from '../utils/transform'
import PreviewForm from './PreviewForm'

const Preview = () => {
    const [form] = Form.useForm()
    const { fields } = useForm(state => state)
    const [formData, setFormData] = useState([])

    useEffect(() => {
        setFormData(transformData(fields))
    }, [fields])

    const onFinish = (values) => {
        console.log(values)
    }

    const onFinishFailed = (errors) => {
        console.log(errors)
    }
    if (!formData.length) return null
    return (
        <Card className='min-w-[350px] h-full'>
            <h1 className='font-semibold mb-3'>Form Preview</h1>
            <div>
                <Form form={form} layout="vertical" className="space-y-6" onFinish={onFinish} onFinishFailed={onFinishFailed}>
                    <PreviewForm formData={formData} />
                    <Form.Item>
                        <Button htmlType="submit" type="primary">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Card>
    )
}

export default Preview