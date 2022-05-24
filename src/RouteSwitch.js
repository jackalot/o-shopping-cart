import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import NavBar from "./components/NavBar";
import Shop from "./Shop";
const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <NavBar>
                
            </NavBar>
            <Routes>
                <Route path="/" element={<App></App>}></Route>
                <Route path="/shop" element={<Shop></Shop>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default RouteSwitch;