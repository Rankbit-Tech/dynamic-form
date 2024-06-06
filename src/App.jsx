import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import './App.css';
import FormProvider from './context/CustomFormContext';

function App() {
  return (
    <FormProvider>
      <DndProvider backend={HTML5Backend}>
        <div className='w-full h-screen flex'>
          <div className='h-full  w-full flex-1'>
            <div className='w-full bg-white h-10'>
              <h1>Dropable area</h1>
            </div>
          </div>
          <div className='min-w-[350px] border-l-[1px] border-gray-300 bg-white p-5'>Dragable area</div>
        </div>
      </DndProvider>
    </FormProvider>
  );
}

export default App;
