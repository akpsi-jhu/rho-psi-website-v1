import './App.css';
import {Routes, Route, HashRouter} from "react-router-dom";
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Recruitment from './Pages/Recruitment';
import Brothers from './Pages/Brothers';
import BrotherPortal from './Pages/BrotherPortal';
import BrotherPortalLogin from './Pages/BrotherPortalLogin';
import {createTheme, ThemeProvider} from "@mui/material";
import { AuthProvider } from './Auth/AuthContext'; // Import AuthProvider
import ProtectedRoute from './Auth/ProtectedRoute'; // Import ProtectedRoute

function App() {
    return (
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <div className="App">
                    <HashRouter basename={process.env.PUBLIC_URL}>
                        <Routes>
                            <Route path='/' element={<Home/>}></Route>
                            <Route path='/contact' element={<Contact/>}></Route>
                            <Route path='/recruitment' element={<Recruitment/>}></Route>
                            <Route path='/brothers' element={<Brothers/>}></Route>
                            <Route path='/activelogin' element={<BrotherPortalLogin/>}></Route>
                            <Route path='/brotherPortal' element={<ProtectedRoute><BrotherPortal /></ProtectedRoute>} />
            <Route path='/login' element={<BrotherPortalLogin />} />
                        </Routes>
                    </HashRouter>
                </div>
            </ThemeProvider>
        </AuthProvider>
    );
}

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            xxl: 1700,
        }
    },
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
