import { ToastContainer } from 'react-toastify';
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
    
   <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/project' element={<Project/>}/>
          <Route exact path='/contact' element={<Contact/>}/>

         
        </Routes>
   </BrowserRouter>
   <ToastContainer />

    </>
  );
}

export default App;
