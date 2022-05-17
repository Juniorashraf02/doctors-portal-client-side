import React from 'react';
import {useLocation,Navigate} from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import useAdmin from './../../Hooks/UseAdmin';
import { signOut } from 'firebase/auth';

const RequireAdmin = ({children}) => {
const [user,loading]= useAuthState(auth);
const [admin, adminLoading] = useAdmin(user);
  let location = useLocation();

  if(loading||adminLoading){
    return <button className="btn loading mt-10">loading</button>
}

  if (!user ||!admin) {
      signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  
  return children;
};

export default RequireAdmin;