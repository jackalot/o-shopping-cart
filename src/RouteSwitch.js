import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App></App>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default RouteSwitch;