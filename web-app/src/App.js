import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Recruitment from './Pages/Recruitment';
import Brothers from './Pages/Brothers';
import {createTheme, ThemeProvider} from "@mui/material";

function App() {
    return (
        <ThemeProvider theme={theme}>
        <div className="App">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/contact' element={<Contact/>}></Route>
                    <Route path='/recruitment' element={<Recruitment/>}></Route>
                    <Route path='/brothers' element={<Brothers/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
        </ThemeProvider>
    );
}

const theme = createTheme({
    typography: {
        fontFamily: [
            'Open Sans',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});

export default App;
