import { Footer } from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { AuthRoutes } from './routes/authroutes';
import { Header } from './Components/Header';
import './App.css';

function App() {
  return (
   <div>
    <BrowserRouter>
    <Header />
      <AuthRoutes />
      <Footer />
    </BrowserRouter>
   </div>
  )
}

export default App
