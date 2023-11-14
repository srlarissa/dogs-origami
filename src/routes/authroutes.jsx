import { Routes, Route } from "react-router-dom";
import { Home } from '../components/Home';
import { Login } from '../components/Login';

export function AuthRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
        </Routes>
    )
}