import { DndContext } from '@dnd-kit/core';
import FormProvider from './context/CustomFormContext';
import Dropable from './components/Dropable';
import SideElements from './components/SideElements';
import './App.css';
import useForm from './store/useForm';
import PropertySettings from './components/PropertySettings';
import { inputType } from './constants';
import { Button } from 'antd';
import { transformData } from './utils/transform';
import { Eye, Save } from 'lucide-react';

function App() {
  const { selectedElement, setFields, setSelected, fields } = useForm(state => state)

  const onHandleDragEnd = (event) => {
    const { active, over } = event;
    if (over && over.id === 'droppable') {
      setFields(active.data.current)
    }
    if (over && over.id.startsWith('section-')) {
      active.data.current.sectionId = over.data.current.id
      setFields(active.data.current)
    }


  }
  const handelSelected = (e) => {
    e.stopPropagation()
    setSelected(null)
  }

  const saveForm = () => {
    const result = transformData(fields)
  }

  return (
    <DndContext onDragEnd={onHandleDragEnd}>
      <div className='w-full h-[calc(100vh-70px)] flex'>
        <div className="w-full flex-1" onClick={handelSelected}>
          <div className='w-full bg-white h-[70px] flex justify-end items-center'>
            <div className='p-4 flex gap-2 items-center' onClick={saveForm}>
              <Button icon={<Eye />}>  Preview</Button>
              <Button icon={<Save />} type="primary"> Save</Button>
            </div>
          </div >
          <div className="flex p-10 justify-center items-center h-full w-full">
            <Dropable />
          </div>
        </div >
        <div className='w-[350px] min-h-screen border-l-[1px] border-gray-300 bg-white p-5'>
          {selectedElement ? <PropertySettings /> : <SideElements />}
        </div>
      </div >
    </DndContext >
  );
}

export default App;
