import { DndContext } from '@dnd-kit/core';
import FormProvider, { useCustomForm } from './context/CustomFormContext';
import Dropable from './components/Dropable';
import SideElements from './components/SideElements';
import './App.css';
import useForm from './store/useForm';
import PropertySettings from './components/PropertySettings';

function App() {
  const { setFields, selectedElement, setSelected } = useForm(state => state)
  const onHandleDragEnd = (event) => {
    setFields(event.active.data.current)
  }

  const handelSelected = (e) => {
    e.stopPropagation()
    setSelected(null)
  }

  return (
    <FormProvider>
      <DndContext onDragEnd={onHandleDragEnd}>
        <div className='w-full h-screen flex '>
          <div className='h-full w-full flex-1' onClick={handelSelected}>
            <div className='w-full bg-white h-10'>
              <h1>Dropable area</h1>
            </div>
            <div className="flex justify-center items-center h-full"><Dropable /></div>
          </div>
          <div className='min-w-[350px] border-l-[1px] border-gray-300 bg-white p-5'>
            {selectedElement ? <PropertySettings /> : <SideElements />}
          </div>
        </div>
      </DndContext>
    </FormProvider>
  );
}

export default App;
