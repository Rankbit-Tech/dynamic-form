import { Button, Card, Flex, Form, Input } from 'antd';
import { DndProvider } from 'react-dnd'
import { Heading1, TextCursorInput } from 'lucide-react';
import { HTML5Backend } from 'react-dnd-html5-backend'

import './App.css';
import Dropable from './components/Dropable';
import Box from './components/Box';
import FormProvider from './context/CustomFormContext';
import { nanoid } from 'nanoid';
import { useState } from 'react';

const inputs = [
  { content: <TextCursorInput size={40} className='icon' />, type: "text" },
];

function App() {

  const form = Form.useForm()
  const [view, setView] = useState("BUILDER")
  const [inputTypes, setInoutTypes] = useState(inputs)

  const getFields = () => {
    const data = localStorage.getItem("form")
    if (!data) return

    const jsonData = JSON.parse(data)
    return jsonData
  }

  const handleFinish = (values) => {
    console.log(values)
  }

  const toggleView = () => {
    if (view == "BUILDER") {
      setView("VIEW")
    } else {
      setView('BUILDER')
    }
  }

  return (
    <FormProvider>
      <DndProvider backend={HTML5Backend}>
        <Flex gap={4}>
          {view == "BUILDER" ? <Dropable allowedDropEffect="any" /> : (
            <Card className='card'>
              <Form
                // form={form}
                onFinish={handleFinish}
                layout='vertical'
              >

                {getFields()?.map(input => {
                  return (
                    <Form.Item name={input.name} label={input.label} key={input.id}>
                      <Input type={input.type} placeholder={input.label} />
                    </Form.Item>
                  )
                })}

                <Form.Item>
                  <Button htmlType="submit" type="primary">Submit</Button>
                </Form.Item>

              </Form>

            </Card>
          )}

          <Card className='drawer'>
            {inputTypes.map((item) => {
              const id = nanoid()
              item.id = id
              return (
                <Box name="input" config={item} key={id} content={item.content} />
              )
            })}

            <Button type='primary' onClick={toggleView}>Toggle View</Button>

          </Card>
        </Flex>
      </DndProvider>
    </FormProvider>
  );
}

export default App;
