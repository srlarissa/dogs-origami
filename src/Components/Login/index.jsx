import { Routes, Route } from 'react-router-dom';
import { LoginForm } from './components/LoginForm';
import { LoginCreate } from './components/LoginCreate';
import { LoginLostPassword } from './components/LoginLostPassword';
import { LoginResetPassword } from './components/LoginResetPassword';

export function Login(){
    return(
        <Routes>
            <Route path="/" element={<LoginForm />}/>
            <Route path="/sign-up" element={<LoginCreate />}/>
            <Route path="/lost-password" element={<LoginLostPassword />}/>
            <Route path="/reset-password" element={<LoginResetPassword />}/>
        </Routes>
    )
}