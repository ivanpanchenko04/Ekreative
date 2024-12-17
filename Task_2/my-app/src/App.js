import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PricingPage from "./pages/PricingPage";

function App() {
    return (
        <div className="App">
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="pricing" element={<PricingPage/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;
