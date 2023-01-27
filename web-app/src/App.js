import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Recruitment from './Pages/Recruitment';
import Brothers from './Pages/Brothers';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
					<Route path='/' element={<Home />}>
					</Route>
          <Route path='/contact' element={<Contact />}>
					</Route>
          <Route path='/recruitment' element={<Recruitment />}>
					</Route>
          <Route path='/brothers' element={<Brothers />}>
					</Route>
			</Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
