import React from 'react'
import { AuthProvider } from './context/AuthContext';
import Signup from './components/Signup';
import Login from "./components/Login"
import Home from './pages/Home';
import {Routes,Route} from 'react-router-dom'
import UpdateEmail from './components/UpdateEmail';
import ProtectedRoute from './hooks/protectedRoute';
import  Profile  from './pages/Profile';
import Page404 from './hooks/Page404'

 function App() {
  return ( 
    <AuthProvider>
      <Routes>
        
        <Route path='/' element={<Home />} />
        
        <Route  path='/signup' element={<Signup />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/update" element={<ProtectedRoute><UpdateEmail /></ProtectedRoute>}/>
        <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}/>

        <Route path='*' element={<Page404/>} />
        
      </Routes>       
    </AuthProvider>
  
  );
};
export default App;