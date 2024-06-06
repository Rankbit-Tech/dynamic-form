import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import './App.css';
import FormProvider from './context/CustomFormContext';

function App() {
  return (
    <FormProvider>
      <DndProvider backend={HTML5Backend}>

      </DndProvider>
    </FormProvider>
  );
}

export default App;
