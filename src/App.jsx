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
        <h1>Hello</h1>
      </DndProvider>
    </FormProvider>
  );
}

export default App;
