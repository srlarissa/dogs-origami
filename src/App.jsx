import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { AuthRoutes } from './routes/authroutes';

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
