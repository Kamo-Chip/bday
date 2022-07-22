import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from './pages/Main';
import Two from './pages/Two';
import Three from './pages/Three';
import Four from './pages/Four';
import Five from './pages/Five';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/two" element={<Two/>}/>
          <Route path="/three" element={<Three/>}/>
          <Route path="/four" element={<Four/>}/>
          <Route path="/five" element={<Five/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
