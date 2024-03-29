import React, { lazy, Suspense } from "react";
import {Routes,Route} from 'react-router-dom'
import Spinner from './components/spinner'


const Signup = lazy(()=> import('./components/Signup'))
const Login = lazy(()=> import('./components/Login'))
const Home = lazy(()=> import('./pages/Home'))
const AdminPage = lazy(()=> import('./pages/AdminPage'))
const Profile = lazy(()=> import('./pages/Profile'))
const Page404 = lazy(()=> import('./hooks/Page404'))
const Services = lazy(()=> import('./pages/Services'))
const BuyMotorForm = lazy(()=> import('./components/User/BuyMotorForm'))
const SellMotorForm = lazy(()=> import('./components/User/SellMotorForm'))
const Pricing = lazy(()=> import('./components/Pricing/Pricing'))
const About = lazy(()=> import('./pages/About'))
const ElectricMotorDetails = lazy(()=> import('./components/MotorDetails/ElectricMotorDetails'))
const CombustionMotorDetails = lazy(()=> import('./components/MotorDetails/CombustionMotorDetails'))
const Invoice = lazy(()=> import('./components/Repaires/RepaireInvoice'))
const ViewInvoices = lazy(()=> import('./Admin/Motor/ViewInvoices'))
const ViewUsers = lazy(()=> import('./Admin/Users/ViewUsers'))
const PostMotor = lazy(()=> import('./Admin/Motor/PostMotor'))
const AllMotors = lazy(()=> import('./Admin/Motor/getAllMotors'))
const Contacts = lazy(()=> import('./pages/Contact'))
const ResetPassword = lazy(()=> import('./components/ResetPassword'))
const ForgotPassword = lazy(()=> import('./components/ForgotPassword'))
const ViewMotors = lazy(()=> import('./components/User/ViewMotors'))
const PostBlog = lazy(()=> import('./Admin/Blog/PostBlog'))
const Blog = lazy(()=> import('./pages/Blog'))
const QuotationRequest = lazy(()=> import('./components/User/QuotationRequest'))
const GeneratorInvoice = lazy(()=> import('./components/Repaires/GeneratorRepair'))
const BlogCard = lazy(()=>import('./utils/BlogCard'))
const ViewComments = lazy(()=> import('./Admin/Users/ViewComments'))
const RedirectPage = lazy(()=> import('./hooks/RedirectPage'))
const ViewQuotations = lazy(()=> import('./Admin/Motor/ViewQuotations'))
const NotificationList = lazy(()=> import('./components/NotificationList'))






 function App() {
  return ( 
    <div className="App">
    <Suspense fallback={<div><Spinner/></div>}>
      <Routes>
        
        <Route path='/' element={<Home />} />
        
        <Route path="/adminDashboard" element={<AdminPage/>}/>
        <Route path="/viewComments" element={<ViewComments/>}/>
        <Route path="/viewQuotations" element={<ViewQuotations/>}/>
        <Route path="/postBlog" element={<PostBlog/>}/>
        <Route path="/blogs" element={<Blog/>}/>
        <Route path="/blog/:id" element={<BlogCard/>}/>
        <Route path="/quotationRequest" element={<QuotationRequest/>}/>
        <Route path="/generatorInvoice" element={<GeneratorInvoice/>}/>
        <Route  path='/signup' element={<Signup />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/password-reset/:id/:token" element={<ResetPassword/>}/>
        <Route path="/forgotPassword" element={<ForgotPassword/>}/>
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
        <Route path="/viewUsers" element={<ViewUsers/>}/>
        <Route path="/postMotors" element={<PostMotor/>}/>
        <Route path="/getMotors" element={<AllMotors/>}/>
        <Route path="/viewMotors" element={<ViewMotors/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/notifications" element={<NotificationList/>}/>
        <Route path="/redirect" element={<RedirectPage/>}/>

        <Route path='*' element={<Page404/>} />
        
      </Routes>       
    </Suspense>
    </div>
  
  );
};
export default App;