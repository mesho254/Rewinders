import React, { lazy, Suspense } from "react";
import {Routes,Route} from 'react-router-dom'
import Spinner from './components/spinner'


const Signup = lazy(()=> import('./components/Signup'))
const Login = lazy(()=> import('./components/Login'))
const Home = lazy(()=> import('./pages/Home'))
const Profile = lazy(()=> import('./pages/Profile'))
const Page404 = lazy(()=> import('./hooks/Page404'))
const Services = lazy(()=> import('./components/Services'))
const BuyMotorForm = lazy(()=> import('./components/User/BuyMotorForm'))
const SellMotorForm = lazy(()=> import('./components/User/SellMotorForm'))
const Pricing = lazy(()=> import('./components/Pricing/Pricing'))
const About = lazy(()=> import('./components/About'))
const ElectricMotorDetails = lazy(()=> import('./components/MotorDetails/ElectricMotorDetails'))
const CombustionMotorDetails = lazy(()=> import('./components/MotorDetails/CombustionMotorDetails'))
const Invoice = lazy(()=> import('./components/Repaires/RepaireInvoice'))
const ViewInvoices = lazy(()=> import('./Admin/Motor/ViewInvoices'))




 function App() {
  return ( 
    <div className="App">
    <Suspense fallback={<div><Spinner/></div>}>
      <Routes>
        
        <Route path='/' element={<Home />} />
        
        <Route  path='/signup' element={<Signup />} />
        <Route path="/login" element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/buyMotor' element={<BuyMotorForm/>}/>
        <Route path="/sellMotor" element={<SellMotorForm/>}/> 
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/electric-motors" element={<ElectricMotorDetails/>}/>
        <Route path="/combustion-motors" element={<CombustionMotorDetails/>}/>
        <Route path="/repair-invoice" element={<Invoice/>}/>
        <Route path="/viewInvoices" element={<ViewInvoices/>}/>

        <Route path='*' element={<Page404/>} />
        
      </Routes>       
    </Suspense>
    </div>
  
  );
};
export default App;