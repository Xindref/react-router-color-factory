import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Colors from './Colors';
import Color from './Color';
import NewColor from './NewColor';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/colors' element={<Colors />}></Route>
        <Route path='colors/:color' element={<Color />}></Route>
        <Route path='/colors/new' element={<NewColor />}></Route>
      </Routes>
    </div>
  );
}

export default App;
