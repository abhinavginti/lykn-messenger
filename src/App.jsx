import Login from './components/Login/Login'
import Messenger from './components/Messenger/Messenger'
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';
const App = () => {
  return <section className='gradient-bg-welcome min-h-screen'>
    <nav className='sticky top-0 z-10 font-anurati w-full p-2'>
      <p className='text-center text-2xl'>Lykn Messenger</p>
    </nav>
    <Routes>
      <Route path='/' element={<PrivateRoute component={Messenger} />} />
      <Route path='/login' element={<PublicRoute component={Login} restricted={true} />} />
    </Routes>
  </section>;
};

export default App;
