import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {

      const {user, loading} = useContext(AuthContext);
      const location = useLocation();
      console.log(location)

      if(loading){
            return <div className="text-center mt-10"><span className="loading loading-ring loading-lg text-primary"></span></div>
      }

      if(user){
          return children;  
      }

      return <Navigate state={location.pathname} to='/login' ></Navigate>
};

export default PrivetRoute;