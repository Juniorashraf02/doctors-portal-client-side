import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/HomePage/Home/Home';
import Navbar from './Pages/Sheared/Navbar/Navbar';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Review from './Pages/Review/Review';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';
import LogIn from './Pages/LogIn/LogIn';
import Signup from './Pages/Signup/Signup';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import Myreview from './Pages/Dashboard/Myreview';
import History from './Pages/Dashboard/History';
import User from './Pages/Dashboard/User';
import RequireAdmin from './Pages/RequireAuth/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';




function App() {
  return (
    <div className="App overflow-x-hidden scroll-smooth">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyAppointment />}></Route>
          <Route path="review" element={<Myreview />}></Route>
          <Route path="history" element={<History />}></Route>
          <Route path="users" element={
            <RequireAdmin>
              <User />
            </RequireAdmin>
          }></Route>

          <Route path="addDoctor" element={
            <RequireAdmin>
              <AddDoctor />
            </RequireAdmin>
          }></Route>

          <Route path="manageDoctors" element={
            <RequireAdmin>
              <ManageDoctors />
            </RequireAdmin>
          }></Route>

          
        </Route>
        <Route path='/review' element={<Review />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
