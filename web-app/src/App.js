import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
					<Route path='/' element={<Home />}>
					</Route>
			</Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
