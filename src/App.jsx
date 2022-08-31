import Create from "./components/Create"
import ViewAll from "./components/ViewAll"
import { Route, Routes } from 'react-router-dom';

function App() {
 
  

  return (
    <Routes>
      <Route index element={<ViewAll/>} />
      <Route path='/create' element={<Create/>} />
    </Routes>
  )
}

export default App
