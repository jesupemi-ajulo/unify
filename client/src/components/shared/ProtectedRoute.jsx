import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProtectedRoute = ({children}) => {
    const {session,loading}=useAuth()
if(loading){
    return(
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-sm text-[#6b6b80]">Loading...</p>
        </div>
    )
}
if(!session){
    return <Navigate to='/login' replace/>
}
return children
}

export default ProtectedRoute