import { Routes, Route } from "react-router-dom";
import { Home } from '../components/Home'

export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}