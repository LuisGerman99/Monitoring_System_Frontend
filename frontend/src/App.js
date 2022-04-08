import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Graphpage from './pages/graph_page';
import Login from "./pages/LoginPage";
import Errorpage from "./pages/Errorpage";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/graphpage" element={<Graphpage />} />
          <Route path="*" element={<Errorpage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
