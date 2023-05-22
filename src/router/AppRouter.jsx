import { Route, Routes } from 'react-router-dom'
import { HebeRoutesPrivate } from '../auth/routes/HebeRoutesPrivate'
import { HebeRoutes} from '../hebe/routes/HebeRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'



export const AppRouter = () => {
  return (

    <>
      <Routes>

        <Route path="/*" element={
          <PublicRoute>
            <HebeRoutes />
          </PublicRoute>
        } />


        <Route path='/auth/*' element={
          <PrivateRoute>  
            <HebeRoutesPrivate/>
          </PrivateRoute>
        }
        />
      </Routes>
    </>
  )
}
