import { Navigate } from "react-router-dom"

export const PrivateRoute = ({ children }) => {

    let token = sessionStorage.getItem('token')
    console.log(token)

    if (token) {
        return children
    }
    else {

        <Navigate to="/inicio" />
    }
}


// export const PrivateRoute = ({ children }) => {


//     // const navigate = useNavigate();
//     // const { logged } = useContext(AuthContext)

//     // const location = useLocation();
//     // console.log(location);

//     // const { pathname, search } = useLocation();

//     // const lastPath = pathname + search;
//     // sessionStorage.setItem('lastPath', lastPath);
//     const [logged, setLogged] = useState(false)
//     const [admin, setAdmin] = useState(false)

//     let token = sessionStorage.getItem('token')
//     console.log(token)
//     let rol = sessionStorage.getItem('rol')
//     console.log(rol)

//     if (token && rol) {

//         if (rol.includes("ADMIN_ROLE")) {
//             setLogged(!logged)
//             setAdmin(!admin)
//             console.log(logged)
//             return children
//             // <Navigate to="/auth/adminpanel" />
//         } else {
//             if (rol.includes("USER_ROLE")) {
//                 setLogged(!logged)
//                 console.log(logged)
//                 return children
//                 // <Navigate to="/auth/userpanel" />
//             } else {
//                 <Navigate to="/inicio" />
//             }

//         }
//     }


//     <Navigate to="/inicio" />

// }


